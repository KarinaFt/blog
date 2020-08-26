import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import '../BoxCard/BoxCard.scss'
import {getPopularThematicPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPopularThematicPostAction?: any,
    isLoading?: boolean,
    popularThematicPost?: any,
}

class PopularThematicPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularThematicPostAction();
    };

    render() {
        let renderPopularThematicPost = this.props.popularThematicPost.map((post: any) =>
            <ThematicBlogCard key={post._id} {...post}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderPopularThematicPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularThematicPost: state.postsReducers.popularThematicPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularThematicPostAction: () => dispatch(getPopularThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularThematicPostComponent);