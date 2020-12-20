import React, {Component} from 'react';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import './SidebarPopularPost.scss';
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import {connect} from 'react-redux';
import { getPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPostAction?: any,
    post?: any,
}

class SidebarPopularPost extends Component<IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
    };

    render() {
        let renderPopularPost = this.props.post.map((post: any, n:number) => (
            <div key={n} className={'sidebar-post'}>
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
        post: state.postsReducers.post,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostAction: () => dispatch(getPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarPopularPost);