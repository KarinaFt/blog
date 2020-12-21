import React from "react";
import './Main.scss'
import {IProps} from "../../interfaces/interface";

export const Main = (props:IProps) => {
    const {children} = props;

    return (
        <main className='main'>
            {children}
        </main>
    )
};