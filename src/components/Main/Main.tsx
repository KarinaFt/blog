import React from "react";
import './Main.scss'

export const Main = (props:any) => {
    const {children} = props;

    return (
        <main className='main'>
            {children}
        </main>
    )
};