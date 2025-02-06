var bnr = new Swiper(".mainBnr", {
    autoplay:{
        delay:2000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var sale = new Swiper(".saleContent", {
    loop:true,
    slidesPerView: 6,
    spaceBetween: 12,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var sale = new Swiper(".newContent", {
    loop:true,
    slidesPerView: 6,
    spaceBetween: 12,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
