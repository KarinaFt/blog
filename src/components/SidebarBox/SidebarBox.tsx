import React from "react";
import './SidebarBox.scss'
import {IProps} from "../../interfaces/interface";

export const SidebarBox:React.FC = (props: IProps) =>{
    let {children} = props;

    return(
        <div className={'sidebar-box'}>
            {children}
        </div>
    )
}