import React from "react";
import './InsideWrapper.scss'

export const InsideWrapper = (props: any) => {
    const {children} = props;

    return (
        <div className='inside-wrapper'>
            {children}
        </div>
    )
};
