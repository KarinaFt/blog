import React from 'react';
import './AuthorSidebar.scss'
import {IProps} from "../../interfaces/interface";


export const AuthorSidebar: React.FC = (props: IProps) => {
    const {children} = props;

    return (
        <div className='author-sidebar'>
            {children}
        </div>
    )
};