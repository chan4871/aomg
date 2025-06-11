document.querySelectorAll('.artist-img-box').forEach(artistImgBox => {
  artistImgBox.addEventListener('mouseenter', () => {
    const userId = artistImgBox.dataset.userId;
    const contentTitle = document.querySelector(`.content-title[data-user-id="${userId}"]`);
    if (contentTitle) contentTitle.classList.add('highlight');
  });

  artistImgBox.addEventListener('mouseleave', () => {
    const userId = artistImgBox.dataset.userId;
    const contentTitle = document.querySelector(`.content-title[data-user-id="${userId}"]`);
    if (contentTitle) contentTitle.classList.remove('highlight');
  });
});
/* ########## 아티스트 이름 클릭하면 옆에 사진 나옴 ########## */
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    let titles = document.querySelectorAll(".artist-name .content-title");
    let artistClickImg = document.querySelector(".artist-click-img");
    let clickImgs = artistClickImg.querySelectorAll("img");
    let artistImg = document.querySelector(".artist-img");

    titles.forEach(title => {
      title.addEventListener("click", function (e) {
        e.stopPropagation(); // 이벤트가 상위 요소로 전파되지 않음

        let userId = title.dataset.userId; // 클릭한 아티스트의 data-user-id값을 가져옴
        artistClickImg.classList.add("active");

        clickImgs.forEach(img => {
          img.classList.remove("active");
        });

        let targetImg = Array.from(clickImgs).find(img =>
          img.src.includes(userId)
        );
        if (targetImg) {
          targetImg.classList.add("active");
        }

        // artist-img 전체 숨기기
        artistImg.classList.add("hidden");
      });
    });

    // 다른 곳 클릭하면 초기화
    document.body.addEventListener("click", function () {
      artistClickImg.classList.remove("active");
      clickImgs.forEach(img => img.classList.remove("active"));
      artistImg.classList.remove("hidden");
    });

    // 이미지 클릭 시 닫히지 않도록
    artistClickImg.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
});