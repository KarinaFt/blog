import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {ImageBox} from "../ImageBox/ImageBox";
import './FeaturedPostComponent.scss'
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";
import {PostAuthor} from "../PostAuthor/PostAuthor";
import {getPostAction} from "../../redux/actions/getPostsActions";

interface IProps {
    getPostAction?: any,
    isLoading?: boolean,
    post?: any,
}

class FeaturedPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
    };

    render() {
        let renderFeaturedPost = this.props.post.map((post: any, num: number) =>
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
                {this.props.isLoading ? <Loading/> : <>{ renderFeaturedPost} </>}
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPostComponent);