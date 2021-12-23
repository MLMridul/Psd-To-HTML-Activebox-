$(document).ready(function () {
    'use strict'

    // Preloader

    window.addEventListener('DOMContentLoaded', function () {
        QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: true,
            barHeight: 1,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });

    // Scroll To Top

    $(window).scroll(function () {
        var scrooling = $(this).scrollTop();
        if (scrooling > 400) {
            $('.scrolltop').slideDown();
        } else {
            $('.scrolltop').slideUp();
        }
        if (scrooling > 300) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
    });

    $('.scrolltop').click(function () {
        $('html,body').animate({
            scrollTop: '0',
        }, 1500)
    })



    // Feedback Slider

    $('.feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        arrows: false,
    });

})