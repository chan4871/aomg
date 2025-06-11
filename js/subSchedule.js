gsap.registerPlugin(ScrollTrigger);

let slideRightTimeline01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".eventThumbSection",
    start: "top top",
    end: "bottom top",
    scrub: 0.8,
  }
});
slideRightTimeline01.to(".eventThumbSection .wrap01", {
  transform: 'translateX(' + $(".eventThumbSection .wrap01 > div").width() + 'px)',
  duration: 1
});

let slideRightTimeline02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".eventThumbSection",
    start: "top top",
    end: "bottom top",
    scrub: 0.8,
  }
});
slideRightTimeline02.to(".eventThumbSection .wrap02", {
  transform: 'translateX(-' + $(".eventThumbSection .wrap02 > div").width() + 'px)',
  duration: 1
});

/* schedule-box > schedule-page 넘기는 기능, (스케줄 왼쪽 박스 ) */
let schedulePage = document.querySelectorAll('.schedule-page');
let prevBtn = document.querySelector('.content-paging-prev');
let nextBtn = document.querySelector('.content-paging-next');
let indicator = document.querySelector('.content-paging-view');

let currentPage = 0;
let totalPages = schedulePage.length;

function updateView() {
  schedulePage.forEach((schedulePage, index) => {
    schedulePage.classList.toggle('active', index === currentPage);
  });

  document.querySelector('.current').textContent = currentPage + 1;
  document.querySelector('.total').textContent = totalPages;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateView();
  }
});
nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateView();
  }
});

updateView();


// 스케줄 오른쪽 달력
// ⛅️ 오른쪽 달력: 날씨 표시 포함
let weatherData = {};

async function fetchWeather(year, month) {
  let apiKey = "2ed16442c95ab5d06148bbdcf0a2197b";
  let city = "Seoul";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

  let res = await fetch(url);
  let data = await res.json();

  weatherData = {};
  data.list.forEach(item => {
    let date = new Date(item.dt * 1000);
    if (date.getFullYear() === year && date.getMonth() === month) {
      let day = date.getDate();
      if (date.getHours() === 0) {
        weatherData[day] = {
          temp: item.main.temp,
          icon: item.weather[0].icon
        };
      }
    }
  });
}

// 날짜 범위 배열 반환 함수
function getDatesBetween(start, end) {
  const dates = [];
  let current = new Date(start);
  const last = new Date(end);
  while (current <= last) {
    dates.push(current.toISOString().slice(0, 10)); // "YYYY-MM-DD"
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

// 달력에 스케줄 이벤트 표시 함수
function markScheduleEvents() {
  const scheduleItems = document.querySelectorAll('li[data-start][data-end][data-type]');

  scheduleItems.forEach(item => {
    const start = item.getAttribute('data-start');
    const end = item.getAttribute('data-end');
    const type = item.getAttribute('data-type'); // 방송, 공연, 라디오, 생일
    const dates = getDatesBetween(start, end);

    dates.forEach(date => {
      const dayCell = document.querySelector(`[data-date="${date}"]`);
      if (dayCell) {
        let container = dayCell.querySelector('.event-mark-container');
        if (!container) {
          container = document.createElement('div');
          container.className = 'event-mark-container';
          dayCell.appendChild(container);
        }
        // 중복 방지: 같은 타입 이벤트가 이미 있으면 추가 안함
        if (!container.querySelector(`.event-mark.${type}`)) {
          let mark = document.createElement('div');
          mark.className = `event-mark ${type}`;
          mark.title = type; // 마우스 올리면 스케줄 종류 보여줌
          mark.textContent = '';
          container.appendChild(mark);
        }
      }
    });
  });
}


// 📅 달력 생성 함수 (날씨 아이콘 포함)
async function generateCalendar(year, month) {
  await fetchWeather(year, month);

  let scheduleBody = document.getElementById('schedule-body');
  scheduleBody.innerHTML = '';

  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let row = document.createElement('tr');

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement('td'));
  }
  for (let day = 1; day <= daysInMonth; day++) {
    let cell = document.createElement('td');
    let dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    cell.setAttribute('data-date', dateStr);
  
    // ✅ 요일 계산 후 클래스 추가
    let cellDate = new Date(year, month, day);
    let dayOfWeek = cellDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      cell.classList.add('weekend');
    }
  
    // 날짜 텍스트
    let dateDiv = document.createElement('div');
    dateDiv.textContent = day;
    cell.appendChild(dateDiv);
  
    // 날씨 아이콘
    if (weatherData[day]) {
      let iconImg = document.createElement('img');
      iconImg.src = `./weatherIcon/${weatherData[day].icon}.png`;

      iconImg.alt = "날씨 아이콘";
      iconImg.className = "weather-icon";
  
      cell.appendChild(iconImg);
    }
  
    row.appendChild(cell);
  
    if ((firstDay + day - 1) % 7 === 6) {
      scheduleBody.appendChild(row);
      row = document.createElement('tr');
    }
  }
  if (row.children.length > 0) {
    scheduleBody.appendChild(row);
  }

  // 달력에 스케줄 이벤트 표시
  markScheduleEvents();
}

// 📌 셀렉트 박스
let yearSelect = document.getElementById('year-select');
let monthSelect = document.getElementById('month-select');

for (let m = 0; m < 12; m++) {
  let option = document.createElement('option');
  option.value = m;
  option.textContent = (m + 1) + "월";
  monthSelect.appendChild(option);
}

let today = new Date();
yearSelect.value = today.getFullYear();
monthSelect.value = today.getMonth();

yearSelect.addEventListener('change', () => {
  generateCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});
monthSelect.addEventListener('change', () => {
  generateCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});

// 첫 로딩 시 달력 생성
generateCalendar(today.getFullYear(), today.getMonth());
