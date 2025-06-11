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


//
/* header */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const logoImg = document.querySelector("#headerLogo");
  const search = document.querySelector(".icon");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 850) {
      header.classList.add("on");
      logoImg.setAttribute("src", "images/AOMG+LOGO.png"); // 스크롤 시 로고 변경
      search.classList.add("iconColor");
    } else {
      header.classList.remove("on");
      search.classList.remove("iconColor");
      logoImg.setAttribute("src", "images/AOMG+LOGO_W.png"); // 원래 로고로 되돌림
    }
  });
});

/* artist-sub */
function getSlideIndexFromURL() {
    const params = new URLSearchParams(window.location.search); // 현재 페이지 url에서 ? 뒤에 붙은 주소를 가져온다 URLSearchParams는 URL 퀘리 문자서열을 다루는 도구라 생각(window.location.search 문자열을  URLSearchParams 객체로 변환 -> get을 사용해 가져올 수 있음)
    const slideNum = parseInt(params.get("slide"));//?slide=2의 경우 get('slide')를 사용해 slide값인 2를 가져올 수 있다.(문자열로) parseInt는 문자열을 숫자로 변환해준다.
    return isNaN(slideNum) ? 0 : slideNum - 1; //isNAN을 사용해 slideNum이 숫자가 아니면 0을, 숫자이면 slideNum-1을 반환
  }
var swiper3 = new Swiper(".artist-info-swiper", {
      navigation: {
        nextEl: ".next-info",
        prevEl: ".prev-info",
      },
      loop: true,
      on: {
        init: function () {
          const targetIndex = getSlideIndexFromURL(); //처음 슬라이드를 실행할 때 위에서 만든 함수에 해당하는 부분을 targetIndex에 저장장
          this.slideTo(targetIndex, 0); // slideTo는 강제로 슬라이드를 이동시키는 함수임. targetIndex 저장된 숫자가 이동할 슬라이드의 번호. 0은 딜레이
        }
      }
    });