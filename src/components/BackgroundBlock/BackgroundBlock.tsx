import React from "react";
import './BackgroundBlock.scss';

export const BackgroundBlock = (props: any) => {
    const {children} = props;
    const mixin = props.mixin;
    const classes = `${mixin}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
};