import React from 'react'

export const NameInput = (props: any) => {
    const mixin = props.mixin;

    return (
        <input {...props}
               required
               className= { `${mixin}`}
               placeholder="Name"/>
    )
};