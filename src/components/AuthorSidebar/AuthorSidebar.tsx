import React from 'react';
import './AuthorSidebar.scss'

export const AuthorSidebar: React.FC = (props: any) => {
    const {children} = props;

    return (
        <div className='author-sidebar'>
            {children}
        </div>
    )
};