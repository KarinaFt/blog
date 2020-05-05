import React from 'react';
import {Wrapper} from '../components/Wrapper/Wrapper';
import {BackgroundBlock} from '../components/BackgroundBlock/BackgroundBlock';
import {GridBox} from '../components/GridBox/GridBox';
import {FlexBox} from '../components/FlexBox/FlexBox';
import {PostsBox} from '../components/PostsBox/PostsBox';
import MainCardSliderComponent from '../components/MainCardSliderComponent/MainCardSliderComponent';
import FeaturedPostComponent from '../components/FeaturedPostComponent/FeaturedPostComponent';
import PopularPostComponent from '../components/PopularPostComponent/PopularPostComponent';
import EssentialsThematicPostComponent
    from '../components/EssentialsThematicPostComponent/EssentialsThematicPostComponent';
import PopularThematicPostComponent from '../components/PopularThematicPostComponent/PopularThematicPostComponent';
import FreelanceThematicPostComponent
    from '../components/FreelanceThematicPostComponent/FreelanceThematicPostComponent';
import FreelancePostComponent from '../components/FreelancePostComponent/FreelancePostComponent';
import EssentialsPostComponent from '../components/EssentialsPostComponent/EssentialsPostComponent';

export const HomePage: React.FC = () => {
    return (
        <>
            <BackgroundBlock mixin='background-block__home-page'>
                <Wrapper>
                    <MainCardSliderComponent/>
                </Wrapper>
            </BackgroundBlock>

            <Wrapper>
                <Wrapper secondaryWrap>
                    <PostsBox>
                        <PopularPostComponent/>
                        <GridBox>
                            <PopularThematicPostComponent/>
                        </GridBox>
                    </PostsBox>

                    <PostsBox>
                        <EssentialsPostComponent/>
                        <GridBox>
                            <EssentialsThematicPostComponent/>
                        </GridBox>
                    </PostsBox>

                    <PostsBox>
                        <FreelancePostComponent/>
                        <GridBox>
                            <FreelanceThematicPostComponent/>
                        </GridBox>
                    </PostsBox>

                    <FlexBox>
                        <FeaturedPostComponent/>
                    </FlexBox>
                </Wrapper>
            </Wrapper>
        </>
    )
};