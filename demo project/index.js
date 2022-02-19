let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menuBtn = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav-bar");
let videoBtn = document.querySelectorAll(".vid-btn");
window.onscroll = ()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}
searchBtn.addEventListener("click", ()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});
formBtn.addEventListener("click", ()=>{
    loginForm.classList.add("active");
});
formClose.addEventListener("click", ()=>{
    loginForm.classList.remove("active");
});
videoBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
     document.querySelector(".controls .active").classList.remove("active");
     btn.classList.add("active");
     let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
    });
});
var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
       delay: 2500,
       disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
       delay: 500,
       disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        250:{
            slidesPerView: 2,
        },
        640:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1024:{
            slidesPerView: 5,
        },
        1802:{
            slidesPerView: 5,
        },
    },
  });
