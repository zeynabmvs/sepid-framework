jQuery(document).ready(function ($) {
    const arrowLeftUrl = '/assets/images/icon-angle-left.svg';
    const arrowRightUrl = '/assets/images/icon-angle-right.svg';

    $('#slider2 .owl-carousel').owlCarousel({
        items: 1,
        rtl: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        // nav: false,
        navText: [`<img src=${arrowRightUrl}>`, `<img src=${arrowLeftUrl}>`],
        dots: true,
        smartSpeed: 1000,
        autoHeight: true, //slider height is based on each item's height
        margin: 10,
        animateIn: 'fadeIn', 
        animateOut: 'fadeOut',
    });

    $('#slider1 .owl-carousel').owlCarousel({
        items: 1,
        rtl: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
    });


});
