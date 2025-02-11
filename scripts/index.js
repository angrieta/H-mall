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
    loop:true,
    slidesPerView: 4,
    spaceBetween: 27,
});
var brand1 = new Swiper(".brandContent1", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 13,
    navigation: {
        nextEl: ".brandContent1 .swiper-button-next",
        prevEl: ".brandContent1 .swiper-button-prev",
    },
});
var brand2 = new Swiper(".brandContent2", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".brandContent2 .swiper-button-next",
        prevEl: ".brandContent2 .swiper-button-prev",
    },
});
var brand1 = new Swiper(".brandContent3", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 13,
    navigation: {
        nextEl: ".brandContent3 .swiper-button-next",
        prevEl: ".brandContent3 .swiper-button-prev",
    },
});
$('.h_btm .left_menu').mouseenter(function(){
    //$('.header_menu').show();
    $('.header_menu').slideDown(); //fadeIn 도 사용가능
})
$('.header_menu').mouseleave(function(){
    $('.header_menu').hide();
})


$('sale .category a').click(function(e){
    e.preventDefault()
    $('sale.category a').removeClass('active');
    $(this).addClass('active');  
})
$('.sale .category a').click(function(e){
    e.preventDefault()
    $('.sale .category a').removeClass('active');
    $(this).addClass('active');  
})
$('new_aria .category a').click(function(e){
    e.preventDefault()
    $('new_aria .category a').removeClass('active');
    $(this).addClass('active');  
})
$('.new_aria .category a').click(function(e){
    e.preventDefault()
    $('.new_aria .category a').removeClass('active');
    $(this).addClass('active');  
})

