import React from 'react';
import {Navigation} from '../Navigation/Navigation';
import {Logo} from '../Logo/Logo';
import {SearchIcon} from '../SearchIcon/SearchIcon';
import './Header.scss'

export const Header: React.FC = () => {

    return (
        <header className='header'>
            <div>
                <Logo headerElem/>
                <Navigation hoverElem mixin='header__nav'/>
            </div>

            <div>
                <SearchIcon/>
            </div>
        </header>
    );
};