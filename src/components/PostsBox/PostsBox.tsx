import React from "react";
import './PostsBox.scss'
import {IProps} from "../../interfaces/interface";

export const PostsBox: React.FC = (props: IProps) => {
    const {children} = props;

    return (
        <div className='posts-box'>
            {children}
        </div>
    )
};