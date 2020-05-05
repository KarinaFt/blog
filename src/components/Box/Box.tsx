import React from "react";
import './Box.scss'

export const Box: React.FC = (props:any) => {
    const {children} = props;

    return (
        <div className='box'>
            {children}
        </div>
    )
};