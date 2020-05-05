import React from "react";
import './PostsBox.scss'

export const PostsBox: React.FC = (props: any) => {
    const {children} = props;

    return (
        <div className='posts-box'>
            {children}
        </div>
    )
};