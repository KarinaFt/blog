import React from "react";

export interface IProps {
    children?: React.ReactNode;
    mixin?:string,
    disabled?:boolean,
    type?:string,
    id?:string
}

export interface TitleI {
    children?: React.ReactNode;
    mixin?: string,
    mdFontSize?: boolean;
    lgSecondFontSize?: boolean;
    lgFontSize?: boolean;
    xxlFontSize?: boolean;
    xxxlFontSize?: boolean;
    extraXlFontSize?: boolean;
    white?: boolean;
    primary?:boolean;
    category?:string;
}