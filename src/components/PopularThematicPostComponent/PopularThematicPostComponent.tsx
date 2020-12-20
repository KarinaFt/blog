import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import '../BoxCard/BoxCard.scss'
import {getListPostsAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class PopularThematicPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let renderPopularThematicPost = this.props.listPosts.map((post: any) =>
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
        listPosts: state.postsReducers.listPosts,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularThematicPostComponent);