var bnr = new Swiper(".mainBnr", {
    autoplay:{
        delay:2000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 3,
    navigation: {
        nextEl: ".mainBnr .swiper-button-next",
        prevEl: ".mainBnr .swiper-button-prev",
    },
});
var sale = new Swiper(".saleContent", {
    loop:true,
    slidesPerView: 6,
    spaceBetween: 12,
    navigation: {
        nextEl: ".sale .swiper-button-next",
        prevEl: ".sale .swiper-button-prev",
    },
});
var newItem = new Swiper(".newContent", {
    loop:true,
    slidesPerView: 6,
    spaceBetween: 12,
    navigation: {
        nextEl: ".new_aria .swiper-button-next",
        prevEl: ".new_aria .swiper-button-prev",
    },
});
var best = new Swiper(".best", {
    direction: "vertical",
    mousewheel:true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    slidesPerView: 2,
    spaceBetween: 50,
  });
  var brand = new Swiper(".brandContent", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 13,
    navigation: {
        nextEl: ".brand_wrap .swiper-button-next",
        prevEl: ".brand_wrap .swiper-button-prev",
    },
});
const categoryMenuBtn = document.querySelector('.h_btm .left_menu')
const categoryMenu = document.querySelector('.header_menu')
categoryMenuBtn.addEventListener('mouseenter',()=>{
    categoryMenu.style.display ='block'
})
categoryMenu.addEventListener('mouseleave',()=>{
    categoryMenu.style.display ='none'
})