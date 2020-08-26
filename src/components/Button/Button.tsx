import React from "react"
import './Button.scss'

export const Button = (props: any) => {
    const {children} = props;
    const mixin = props.mixin;

    return (
        <button {...props}
                className={`${mixin} button button--hovered`}>
            {children}
        </button>
    )
};