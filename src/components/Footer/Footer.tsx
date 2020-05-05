import React from "react";
import {Icon} from "../Icon/Icon";
import {Logo} from "../Logo/Logo";
import {Copyright} from "../Copyright/Copyright";
import './Footer.scss'

export const Footer = () => {

    return (
        <div className='footer'>
            <Logo/>
            <div className='footer__icon'>
                <Icon/>
            </div>
            <Copyright/>
        </div>
    );
};