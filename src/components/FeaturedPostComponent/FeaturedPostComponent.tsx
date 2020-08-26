import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {ImageBox} from "../ImageBox/ImageBox";
import './FeaturedPostComponent.scss'
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";
import {PostAuthor} from "../PostAuthor/PostAuthor";
import {getFeaturedPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getFeaturedPostAction?: any,
    isLoading?: boolean,
    featuredPost?: any,
}

class FeaturedPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getFeaturedPostAction();
    };

    render() {
        let renderFeaturedPost = this.props.featuredPost.map((post: any, num: number) =>
            <div className='featured-post' key={num}>
                <ImageBox {...post}/>

                <div className="main-card">
                    <PostAuthor {...post}  mdFontSize/>
                    <Title mixin = 'featured-post__title' xxlFontSize>{post.title}</Title>
                    <Content primary>{post.description}</Content>
                </div>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderFeaturedPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        featuredPost: state.postsReducers.featuredPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFeaturedPostAction: () => dispatch(getFeaturedPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPostComponent);