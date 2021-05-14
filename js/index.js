$(document).ready(function() {
    $('.header_slider__style').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.news_slider__style').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
    });

});