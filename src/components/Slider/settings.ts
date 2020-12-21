import 'slick-carousel';
import $ from "jquery";

export function settingsSlider (){

    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 600,
        easing: 'ease',
        rows: 2,
        autoplay: true,
        autoplaySpeed: 5000,

        appendArrows: $('.elements'),
        prevArrow: '<button id="prev" type="button" class="slick-prev"> </button>',
        nextArrow: '<button id="next" type="button" class="slick-next "> </button>',
        appendDots: $('.dots-slick'),


        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 376,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                arrows: false
            }
        }]
    });
}

