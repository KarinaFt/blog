import React from 'react';
import './AuthorTheme.scss'
import Pagination from '../Pagination/Pagination';
import {SubscribeBox} from '../SubscribeBox/SubscribeBox';

export const AuthorTheme: React.FC = () => {

    return (
        <div className='author-theme'>
            <Pagination/>
            <SubscribeBox/>
        </div>
    )
};