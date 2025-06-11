let newsPerPage = 9; // 한 페이지에 보여줄 뉴스 개수
let currentPage = 1; // 현재 페이지 번호
let rows = document.querySelectorAll('#tableBody tr'); // 테이블의 모든 행(tr)을 선택

function showPage(page) {
  currentPage = page; // 현재 페이지 갱신

  // 모든 행을 숨김
  rows.forEach(row => row.classList.add('hidden'));

  // 보여줄 행 범위 계산
  let start = (page - 1) * newsPerPage;
  let end = start + newsPerPage;

  // 해당 범위의 행만 보여줌
  for (let i = start; i < end && i < rows.length; i++) {
    rows[i].classList.remove('hidden');
  }

  // 페이지네이션 다시 그림
  renderPagination();
}

function renderPagination() {
  let totalPages = Math.ceil(rows.length / newsPerPage); // 전체 페이지 수
  let pagination = document.querySelector('.pagination'); // 버튼 들어갈 영역
  let buttons = '';

  // ◀ 이전 버튼
  buttons += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="showPage(${currentPage - 1})"><i class="fa-solid fa-chevron-left"></i></button>`;

  // ✅ 1~5 고정된 페이지 번호 버튼
  for (let i = 1; i <= 5; i++) {
    buttons += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  // ▶ 다음 버튼
  buttons += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="showPage(${currentPage + 1})"><i class="fa-solid fa-chevron-right"></i></button>`;

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

// 초기 실행
showPage(1);
