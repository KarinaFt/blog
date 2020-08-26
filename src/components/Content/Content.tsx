import React from 'react'
import './Content.scss'
import '../../assets/styles/scss/common/_common.scss'

export const Content = (props) => {
    const {children} = props;
    const paddingSize = (props.postPadding ? 'content--post-pd' : '');
    const color = (props.textWhite ? "text-white" : props.primary ? "primary" : "");
    const mixin = props.mixin;

    const fontSize = (
        props.smFontSize ? "sm-font-size"
            : props.mdFontSize ? "md-font-size"
            : props.lgSecondFontSize ? 'lg-second-font-size'
                : props.xxlFontSize ? 'xxl-font-size'
                    : props.xxxlFontSize ? 'xxxl-font-size' : "");

    const classes = `content ${mixin} ${fontSize} ${color} ${paddingSize}`;

    return (
        <p className={classes}>
            {children}
        </p>
    )
};