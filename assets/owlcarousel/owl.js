jQuery(document).ready(function ($) {
    const arrowLeftUrl = '/assets/images/arrow-left.svg';
    const arrowRightUrl = '/assets/images/arrow-right.svg';

    $('#homeSlider .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
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

    $('#top-sellers .owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        },
        dots:false,
        // navText: ["<img src='images/icon-angle-left.svg'>","<img src='images/icon-angle-right.svg'>"],
        smartSpeed: 1000,
    })


    // var owl2 = $('#top-sellers .owl-carousel');
    // owl2.owlCarousel({
    //     loop: true,
    //     nav: true,
    //     // margin: 10,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1200: {
    //             items: 6
    //         }
    //     }
    // });
    // owl2.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY > 0) {
    //         owl2.trigger('next.owl');
    //     } else {
    //         owl2.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });


});

