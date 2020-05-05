import React from "react";
import './FlexBox.scss'

export const FlexBox = (props: any) => {
    const {children} = props;
    const flexStyle = (props.center ? 'flex-box--center' : '');
    const postStyle = (props.post ? 'flex-box--post-styles' : 'flex-box');

    return (
        <div className={`${flexStyle} ${postStyle}`}>
            {children}
        </div>
    )
};