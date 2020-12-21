import React from "react";
import './Logo.scss'

interface IProps {
    headerElem?: boolean;
}

export const Logo = (props: IProps) => {
    const classes = (props.headerElem ? 'logo--black-color' : "logo--gray-color");

    return (
        <img className={classes} alt='Bahram' src={require('../../assets/images/bahram.png')}/>
    )
};