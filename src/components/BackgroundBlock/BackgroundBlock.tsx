import React from "react";
import './BackgroundBlock.scss';
import {IProps} from "../../interfaces/props";

export const BackgroundBlock = (props: IProps) => {
    const {children} = props;
    const mixin = props.mixin;
    const classes = `${mixin}`;

    return (
        <div className={classes}>
            {children}
        </div>
    );
};