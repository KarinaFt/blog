import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.scss'

export const Navigation = (props) => {
    const linkNavClass = (props.hoverElem
        ? 'navigation-bar__link navigation-bar__link--hovered'
        : 'navigation-bar__link');
    const mixin = props.mixin;

    const navBar = [{
        link: '/',
        title: 'Home'
    }, {
        link: '/subscribe',
        title: 'Subscribe'
    }, {
        link: '/new',
        title: 'New'
    }];
    const classes = `${linkNavClass} ${mixin}`;

    let renderNav = navBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar">
                    <NavLink key={n} to={nav.link} className={classes}>
                        {nav.title}
                    </NavLink>
                </span>
    });

    return (
        <>{renderNav}</>
    )
};