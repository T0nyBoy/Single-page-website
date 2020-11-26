const menuBars = document.querySelector(".menuHeading");
const sideMenu = document.querySelector(".sideMenu");
const menuContainer = document.querySelector(".menuContainer");

menuBars.addEventListener("click",()=>{
    sideMenu.classList.toggle("sideMenuShow");
    menuContainer.classList.toggle("containerBig");
});