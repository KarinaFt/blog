import React from "react";

export interface IProps {
    children?: React.ReactNode;
    mixin?:string,
    disabled?:boolean,
    type?:string,
    id?:string
}