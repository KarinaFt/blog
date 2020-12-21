import React from "react";
import './InsideWrapper.scss'
import {IProps} from "../../interfaces/interface";

export const InsideWrapper = (props: IProps) => {
    const {children} = props;

    return (
        <div className='inside-wrapper'>
            {children}
        </div>
    )
};
