import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import '../SidebarPopularPost/SidebarPopularPost.scss';
import {getEssentialsThematicPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getEssentialsThematicPostAction?: any,
    essentialsThematicPost?: any
}

class SidebarRecentPost extends Component<IProps, {}> {
    componentDidMount() {
        this.props.getEssentialsThematicPostAction();
    };

    render() {
        let renderRecentPost = this.props.essentialsThematicPost.map((post: any) => (
            <div className={'sidebar-post'}>
                <div className={'sidebar-post__text'}>

                    <Content mixin={'sidebar-post--small'} primary>
                        {post.tags}
                    </Content>
                    <Title mixin={'sidebar-post--small'}>
                        {post.title}
                    </Title>

                </div>
            </div>
        ))

        return (
            <SidebarBox>
                <Title mixin={'sidebar-post--center'}>
                    Recent post
                </Title>
                {renderRecentPost}
            </SidebarBox>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        essentialsThematicPost: state.postsReducers.essentialsThematicPost,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getEssentialsThematicPostAction: () => dispatch(getEssentialsThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRecentPost);