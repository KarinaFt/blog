import React from "react";

export const settings = {
    arrows: false,
    dots: true,
    className:'main-slider',
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
        <div>
            {dots}
        </div>
    ),
    customPaging: (i: any) => (
        <div>
            {i + 1}
        </div>
    )
};