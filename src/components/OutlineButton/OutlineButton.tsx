import React from 'react'
import './OutlineButton.scss'

export const OutlineButton = (props: any) => {
    const {children} = props;
    const classes = (props.secondary ? 'outline-button--pink' : 'outline-button--gray');

    return (
        <a  {...props}
            className={`${classes} outline-button--hovered`}>
            {children}
        </a>
    )
};