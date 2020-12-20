import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../Healpers/Loading';
import {PostAuthor} from '../PostAuthor/PostAuthor';
import {Title} from '../Title/Title';
import {Content} from '../Content/Content';
import './PostMainCardComponent.scss'
import { getPostAction} from '../../redux/actions/getPostsActions';
import {settingsSlider} from '../Slider/settings'

interface IProps {
    getPostAction?: any,
    post?: any,
    isLoading?: boolean,
}

class PostMainCardComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
        settingsSlider()
    };

    render() {
        let renderPopularPost = this.props.post.map((post: any, num: number) => {

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
        post: state.postsReducers.post,
        isLoading: state.postsReducers.isLoading,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostAction: () => dispatch(getPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMainCardComponent);