import React from "react";
import './Wrapper.scss'

export const Wrapper = (props: any) => {
    const {children} = props;
    const classes = (props.secondaryWrap ? 'secondary-wrapper' : 'wrapper');

    return (
        <div className = {classes}>
            {children}
        </div>
    )
};
