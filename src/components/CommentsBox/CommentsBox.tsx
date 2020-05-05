import React from 'react';
import CommentsListComponent from '../CommentsListComponent/CommentsListComponent';
import './CommentsBox.scss';
import {Title} from '../Title/Title';
import CommentsFormComponent from '../CommentsFormComponent/CommentsFormComponent';
import CommentPolicyBox from '../CommentPolicyBox/CommentPolicyBox';

export const CommentsBox = () => {

    return (
        <>
            <CommentPolicyBox/>
            <div className='comments-list-box'>
                <CommentsListComponent/>
            </div>

            <div className='form-box'>
                <Title xxlFontSize> Leave a Reply </Title>
                <CommentsFormComponent/>
            </div>
        </>
    );
};