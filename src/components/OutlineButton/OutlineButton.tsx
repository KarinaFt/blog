import React from 'react'
import './OutlineButton.scss'

interface IProps {
    secondary?: boolean;
    children?: React.ReactNode
    href?: string;
    onClick?:any
}

export const OutlineButton = (props: IProps) => {
    const {children} = props;
    const classes = (props.secondary ? 'outline-button--pink' : 'outline-button--gray');

    return (
        <a  {...props}
            className={`${classes} outline-button--hovered`}>
            {children}
        </a>
    )
};