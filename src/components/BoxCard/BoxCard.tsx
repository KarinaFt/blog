import React from 'react';
import {Title} from '../Title/Title';
import './BoxCard.scss'
import {MainCard} from '../MainCard/MainCard';

export const BoxCard: React.FC = (props: any) => {

    return (
        <div className='box-card'>
            <Title mixin='box-card__title'  {...props} xxxlFontSize/>
            <div className='box-card__main-card main-card--hovered '>
                <MainCard {...props}/>
            </div>
        </div>
    )

};