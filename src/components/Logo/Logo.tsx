import React from "react";
import './Logo.scss'

export const Logo = (props) => {
    const classes = (props.headerElem ? 'logo--black-color' : "logo--gray-color");

    return (
        <img className={classes} alt='Bahram' src={require('../../assets/images/bahram.png')}/>
    )
};