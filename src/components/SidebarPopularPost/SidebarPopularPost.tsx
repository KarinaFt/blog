import React, {Component} from 'react';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import './SidebarPopularPost.scss';
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import {connect} from 'react-redux';
import {getPopularThematicPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPopularThematicPostAction?: any,
    popularThematicPost?: any,
}

class SidebarPopularPost extends Component<IProps, {}> {
    componentDidMount() {
        this.props.getPopularThematicPostAction();
    };

    render() {
        let renderPopularPost = this.props.popularThematicPost.map((post: any) => (
            <div className={'sidebar-post'}>
                <div className={'sidebar-post__image'}/>
                <div className={'sidebar-post__text-box'}>

                    <Content mixin={'sidebar-post--small'} primary>
                        {post.tags}
                    </Content>

                    <Title mixin={'sidebar-post--small'}>
                        {post.title}
                    </Title>

                </div>
            </div>
        ));

        return (
            <SidebarBox>
                <Title mixin={'sidebar-post--center'}>
                    Popular post
                </Title>
                {renderPopularPost}
            </SidebarBox>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularThematicPost: state.postsReducers.popularThematicPost,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularThematicPostAction: () => dispatch(getPopularThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarPopularPost);