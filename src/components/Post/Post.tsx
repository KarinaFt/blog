import React from "react";
import './Post.scss'
import {Title} from "../Title/Title";
import {FlexBox} from "../FlexBox/FlexBox";
import FeaturedPostComponent from "../FeaturedPostComponent/FeaturedPostComponent";

export const Post: React.FC = () => {

    return (
        <>
            <Title mixin = 'post__title' xxxlFontSize>
                You might also like...
            </Title>

            <FlexBox>
                <FeaturedPostComponent/>
            </FlexBox>
        </>
    )
};