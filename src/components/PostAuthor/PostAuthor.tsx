import React from 'react';
import './PostAuthor.scss'

interface IProps {
    secondary?: boolean;
    primary?: boolean;
    textWhite?: boolean;
    mdFontSize?: boolean;
    lgSecondFontSize?: boolean;
    xxlFontSize?: boolean;
    tags?: string;
    children?: React.ReactNode
}

export const PostAuthor = (props: IProps) => {
    const color = (props.primary ? 'text-primary' : props.secondary
        ? 'text-secondary' : props.textWhite ? 'text-white' : '');
    const fontSize = (props.mdFontSize ? 'md-font-size' : props.lgSecondFontSize
        ? 'lg-second-font-size' : props.xxlFontSize ? 'xxl-font-size' : '');

    const classes = `${fontSize} ${color}`;

    return (
        <p className={`post-author ${classes}`}>
            <span>
                By Vladilen IN {props.tags}
            </span>
        </p>
    )
};