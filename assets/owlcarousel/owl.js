jQuery(document).ready(function ($) {
    const arrowLeftUrl = '/assets/images/arrow-left.svg';
    const arrowRightUrl = '/assets/images/arrow-right.svg';

    $('#homeSlider .owl-carousel').owlCarousel({
        items: 1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        rtl: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            }
        },
        nav: true,
        navText: [`<img src=${arrowRightUrl}>`, `<img src=${arrowLeftUrl}>`],
        dots: true,
        smartSpeed: 1000,
        autoHeight: true, //slider height is based on each item's height
        margin: 10,
        animateIn: 'fadeIn', 
        animateOut: 'fadeOut',
        dotsContainer: '#customDots',
        navContainer: '#customNavs',
    });
    
   
});

