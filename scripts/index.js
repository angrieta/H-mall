var bnr = new Swiper(".mainBnr", {
    slidesPerView: 3,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
var sale = new Swiper(".saleContent", {
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