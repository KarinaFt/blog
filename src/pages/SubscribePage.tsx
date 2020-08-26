import React from 'react';
import {Wrapper} from '../components/Wrapper/Wrapper';
import {AuthorTheme} from '../components/AuthorTheme/AuthorTheme';
import {AuthorSidebar} from '../components/AuthorSidebar/AuthorSidebar';
import {Box} from '../components/Box/Box';
import {SubscribeSmallBox} from '../components/SubscribeSmallBox/SubscribeSmallBox';
import SidebarRecentPost from '../components/SidebarRecentPost/SidebarRecentPost';
import SidebarPopularPost from '../components/SidebarPopularPost/SidebarPopularPost';

export const SubscribePage: React.FC = () => {

    return (
        <Wrapper>
            <Wrapper secondaryWrap>

                <Box>
                    <AuthorTheme/>

                    <AuthorSidebar>
                        <SidebarPopularPost/>
                        <SidebarRecentPost/>
                        <SubscribeSmallBox/>
                    </AuthorSidebar>
                </Box>
            </Wrapper>
        </Wrapper>
    );
};