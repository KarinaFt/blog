import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import '../SidebarPopularPost/SidebarPopularPost.scss';
import {getListPostsAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getListPostsAction?: any,
    listPosts?: any,
}

class SidebarRecentPost extends Component<IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let renderRecentPost = this.props.listPosts.map((post: any, n) => (
            <div key={n} className={'sidebar-post'}>
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
        listPosts: state.postsReducers.listPosts,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRecentPost);