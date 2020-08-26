import React from 'react';
import './PostAuthor.scss'

export const PostAuthor = (props: any) => {
    const color = (props.primary ? 'text-primary' : props.secondary
        ? 'text-secondary' : props.textWhite ? 'text-white' : '');
    const fontSize = (props.mdFontSize ? 'md-font-size' : props.lgSecondFontSize
        ? 'lg-second-font-size' : props.xxlFontSize ? 'xxl-font-size' : '');

    const classes = `${fontSize} ${color}`; 

    return (
        <p className={`post-author ${classes}`}>
            <span>
                By {props.author.firstName} {props.author.lastName} IN {props.tags}
            </span>
        </p>
    )
};