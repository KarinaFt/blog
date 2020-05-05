import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../Healpers/Loading';
import {PostAuthor} from '../PostAuthor/PostAuthor';
import {Title} from '../Title/Title';
import {Content} from '../Content/Content';
import './PostMainCardComponent.scss'
import {getPopularPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPopularPostAction?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class PostMainCardComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularPostAction();
    };

    render() {
        let renderPopularPost = this.props.popularPost.map((post: any, num: number) => {

            return (
                <div key={num} className="post-main-card main-card">
                    <Title xxxlFontSize mixin='post-main-card__title'>
                        {post.title}
                    </Title>

                    <Content mixin='post-main-card__content' lgFontSize>{post.description}</Content>
                    <PostAuthor {...post} mdFontSize/>
                </div>);
        });

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderPopularPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularPost: state.postsReducers.popularPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMainCardComponent);