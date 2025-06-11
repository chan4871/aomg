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


/* store */
var besrItem = new Swiper(".best-item-swiper", {
  slidesPerView: 2,
  breakpoints:{
    768: {
      slidesPerView: 4,
    }
  },
  loop: true,
});
var newRelease = new Swiper(".new-release-swiper", {
  slidesPerView: 3,
  breakpoints:{
        768: {
          slidesPerView: 4.7,
          spaceBetween: 130,
        }
      },
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  
});


//  allproduct 섹션 부분
let allPerPage = 20; // 한 페이지에 보여줄 상품 개수
let currentPage = 1; // 현재 페이지 번호
let li = document.querySelectorAll('#productList li'); // 모든 ul>li 선택

// 모바일 반응형에서 보여줄 상품 개수
function setPerPage(){
  let mobile = window.innerWidth <= 768; //너비가 768일 때
  allPerPage = mobile ? 8 : 20; //모바일 8개, 아니면 20개(PC)
}

function showPage(page) {
  setPerPage();
  
  currentPage = page; // 현재 페이지 갱신

  // 모든 li 숨김
  li.forEach(li => li.classList.add('hidden'));

  // 보여줄 행 범위 계산
  let start = (page - 1) * allPerPage;
  let end = start + allPerPage;

  // 해당 범위의 행만 보여줌
  for (let i = start; i < end && i < li.length; i++) {
    li[i].classList.remove('hidden');
  }

  // 페이지네이션 다시 그림
  renderPagination();
}

function renderPagination() {
  let totalPages = Math.ceil(li.length / allPerPage); // 전체 페이지 수
  let pagination = document.querySelector('.pagination'); // 버튼 들어갈 영역
  let buttons = '';

  // 📦 페이지 그룹 계산 (5개씩 묶음)
  const groupSize = 5;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const groupStart = currentGroup * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages);

  // ◀ 이전 그룹 버튼
  if (groupStart > 1) {
    buttons += `<button onclick="showPage(${groupStart - 1})"><i class="fa-solid fa-chevron-left"></i></button>`;
  } else {
    buttons += `<button disabled><i class="fa-solid fa-chevron-left"></i></button>`;
  }

  // 📄 그룹 내 페이지 번호 버튼
  for (let i = groupStart; i <= groupEnd; i++) {
    buttons += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  // ▶ 다음 그룹 버튼
  if (groupEnd < totalPages) {
    buttons += `<button onclick="showPage(${groupEnd + 1})"><i class="fa-solid fa-chevron-right"></i></button>`;
  } else {
    buttons += `<button disabled><i class="fa-solid fa-chevron-right"></i></button>`;
  }

  // HTML 삽입
  pagination.innerHTML = buttons;

  // ✅ 버튼 클릭 이벤트 + active 클래스 갱신
  const pageButtons = document.querySelectorAll('.page-btn');
  pageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page);
      showPage(page); // 페이지 이동
    });
  });
}
window.addEventListener('resize', () => {
  showPage(1); // 화면 크기 바뀌면 다시 그리기
});
// 초기 실행
showPage(1);