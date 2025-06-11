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