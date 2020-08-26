import React from 'react';
import './Slider.scss'
import {Title} from '../Title/Title';

const Slider: React.FC = () => {

    const slide = [{
        category: 'Popular',
    }, {
        category: 'Freelance',
    }, {
        category: 'Essentials',
    }, {
        category: 'Freelance',
    }, {
        category: 'Popular',
    }, {
        category: 'Essentials',
    }, {
        category: 'Popular',
    }, {
        category: 'Freelance',
    }, {
        category: 'Essentials',
    }, {
        category: 'Popular',
    },];

    let renderSlide = slide.map((slide: any, n: number) => {
        return (
            <div key={n} className="slider__item">
                <img className="slider__img slider__img--hovered" src="  " alt=""/>
                <Title mixin="slider__title">
                    {slide.category}
                </Title>
            </div>)
    });

    return (
        <>
            <div className='wrapper-slider'>
                <div className="wrapper-slider__inside">
                    <Title mixin='title__slider' xxxlFontSize> Reading lists</Title>
                    <div className='slider-box'>
                        <div className="slider">
                            {renderSlide}
                        </div>
                    </div>

                    <div className="elements">
                        <div className="dots-slick"> </div>
                    </div>
                </div>
            </div>
        </>)
};
export default Slider;