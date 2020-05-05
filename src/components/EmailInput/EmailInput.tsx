import React from 'react'
import './EmailInput.scss'

export const EmailInput = (props: any) => {
    const mixin = props.mixin;

    return (
        <input {...props}
               required
               className={` ${mixin}`}/>
    )
};