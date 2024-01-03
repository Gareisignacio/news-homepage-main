const menuIcon = document.querySelector(".menu-icon");
const menuCloseSrc = "../images/icon-menu-close.svg";

menuIcon.addEventListener("click", menuDisplay);

function menuDisplay(){
   let navMenu = document.querySelector(".nav-menu");
   navMenu.classList.toggle("display");

   menuIcon.classList.toggle("close-icon")
}

