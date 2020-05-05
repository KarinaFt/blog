import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {Post} from "../components/Post/Post";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";
import {BackgroundBlock} from "../components/BackgroundBlock/BackgroundBlock";
import PostMainCardComponent from '../components/PostMainCardComponent/PostMainCardComponent';

export const NewPage: React.FC = () => {

    return (
        <>
            <BackgroundBlock mixin = 'background-block__new-page'>
                <Wrapper>
                    <PostMainCardComponent/>
                </Wrapper>
            </BackgroundBlock>
            <Wrapper>
                <Post/>

                <InsideWrapper>
                    <CommentsBox/>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};