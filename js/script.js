$(document).ready(function () {
    $(".owl-one").owlCarousel({
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        dots: false,
        // navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            350: {
                items: 3,
                nav: false
            },
            550: {
                items: 3,
                nav: false
            },
            600: {
                items: 3,
                nav: true
            },
            800: {
                items: 4,
                nav: true
            },
            1000: {
                items: 6,
                nav: true
            },
            1280: {
                items: 7,
                nav: false
            }
        }
    });

    $(".owl-two").owlCarousel({
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        dots: false,
        // navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            350: {
                items: 1,
                nav: false
            },
            550: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: true
            },
            800: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: true
            },
            1280: {
                items: 3,
                nav: false
            }
        }
    });

});