import React from "react";
import './SidebarBox.scss'

export const SidebarBox:React.FC = (props: any) =>{
    let {children} = props;

    return(
        <div className={'sidebar-box'}>
            {children}
        </div>
    )
}