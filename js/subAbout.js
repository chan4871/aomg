/* 반응형 header */
let menu = document.getElementById('menu')
let close = document.getElementById('close')
let sideMenu = document.getElementById('side-menu')
console.log(sideMenu,menu,close)

menu.addEventListener('click', ()=>{
  sideMenu.classList.add('open')
})
close.addEventListener('click', ()=>{
  sideMenu.classList.remove('open')
})

/* sub1-about map */
var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5454646, 127.0151033),
    zoom: 15,
    mapTypeControl: true
});

var infoWindow = new naver.maps.InfoWindow({
    anchorSkew: true
});

map.setCursor('pointer');

function searchCoordinateToAddress(latlng) {

    infoWindow.close();

    naver.maps.Service.reverseGeocode({
        coords: latlng,
        orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR
        ].join(',')
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        var items = response.v2.results,
            address = '',
            htmlAddresses = [];

        for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
            item = items[i];
            address = makeAddress(item) || '';
            addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

            htmlAddresses.push((i+1) +'. '+ addrType +' '+ address);
        }

        infoWindow.setContent([
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 좌표</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>'
        ].join('\n'));

        infoWindow.open(map, latlng);
    });
}

function searchAddressToCoordinate(address) {
    naver.maps.Service.geocode({
        query: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        if (response.v2.meta.totalCount === 0) {
            return alert('totalCount' + response.v2.meta.totalCount);
        }

        var htmlAddresses = [],
            item = response.v2.addresses[0],
            point = new naver.maps.Point(item.x, item.y);

        if (item.roadAddress) {
            htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
        }

        if (item.jibunAddress) {
            htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
        }

        if (item.englishAddress) {
            htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
        }

        infoWindow.setContent([
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>'
        ].join('\n'));

        map.setCenter(point);
        infoWindow.open(map, point);
    });
}

function initGeocoder() {
    map.addListener('click', function(e) {
        searchCoordinateToAddress(e.coord);
    });

    $('#address').on('keydown', function(e) {
        var keyCode = e.which;

        if (keyCode === 13) { // Enter Key
            searchAddressToCoordinate($('#address').val());
        }
    });

    $('#submit').on('click', function(e) {
        e.preventDefault();

        searchAddressToCoordinate($('#address').val());
    });

    searchAddressToCoordinate('서울특별시 성동구 독서당로 198 (옥수동)');
}

function makeAddress(item) {
    if (!item) {
        return;
    }

    var name = item.name,
        region = item.region,
        land = item.land,
        isRoadAddress = name === 'roadaddr';

    var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

    if (hasArea(region.area1)) {
        sido = region.area1.name;
    }

    if (hasArea(region.area2)) {
        sigugun = region.area2.name;
    }

    if (hasArea(region.area3)) {
        dongmyun = region.area3.name;
    }

    if (hasArea(region.area4)) {
        ri = region.area4.name;
    }

    if (land) {
        if (hasData(land.number1)) {
            if (hasData(land.type) && land.type === '2') {
                rest += '산';
            }

            rest += land.number1;

            if (hasData(land.number2)) {
                rest += ('-' + land.number2);
            }
        }

        if (isRoadAddress === true) {
            if (checkLastString(dongmyun, '면')) {
                ri = land.name;
            } else {
                dongmyun = land.name;
                ri = '';
            }

            if (hasAddition(land.addition0)) {
                rest += ' ' + land.addition0.value;
            }
        }
    }

    return [sido, sigugun, dongmyun, ri, rest].join(' ');
}

function hasArea(area) {
    return !!(area && area.name && area.name !== '');
}

function hasData(data) {
    return !!(data && data !== '');
}

function checkLastString (word, lastString) {
    return new RegExp(lastString + '$').test(word);
}

function hasAddition (addition) {
    return !!(addition && addition.value);
}

naver.maps.onJSContentLoaded = initGeocoder;



/* ############ Sub1-About Scroll Event ############ */
gsap.from(".first-intro", {
  scrollTrigger: {
    trigger: ".introduce",  //어느 요소에 스크롤이 도착했을 때 시작할건지
    start: "-20% 30%",  //스크롤 트리거의 시작 기준점 설정. 앞의 값은 트리거 요소 기준(.full_screen의 상단부터 -20% 적용), 뒤의 값은 보고있는 페이지의 높이 기준.
    end: "center bottom",  //스크롤 트리거의 끝점 설정.
    scrub: 0.5,  //스크롤 바를 잡는데 걸리는 시간(움직임의 구현 속도 설정. 높을수록 느림.)
    // markers: true,  //기준점을 화면에 표시할지 설정.
    onLeave: function(){ // 끝나는지점 callback함수
      console.log('첫번째 이벤트 완료');
    }
  },
  scale: 1,
});
gsap.from(".introduce-video > video", {
  scrollTrigger: {
    trigger: ".introduce-video",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    // markers: true,
  },
  scale: 0.5,
});
gsap.to(".next-intro", {
  scrollTrigger: {
    trigger: ".introduce",
    start: "top+=60% center",
    end: "center center",
    scrub: 1,
  },
  opacity: 1,
  y: 0,
  ease: "power2.out"
});