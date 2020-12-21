import React from "react";
import './Box.scss'
import {IProps} from "../../interfaces/props";

export const Box: React.FC = (props:IProps) => {
    const {children} = props;

    return (
        <div className='box'>
            {children}
        </div>
    )
};