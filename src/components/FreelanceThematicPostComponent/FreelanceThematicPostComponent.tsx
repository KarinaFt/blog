import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import '../../components/BoxCard/BoxCard.scss'
import { getListPostsAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class FreelanceThematicPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let renderMainCard = this.props.listPosts.map((post: any) =>
            <ThematicBlogCard key={post._id} {...post}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderMainCard}</>}
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

export default connect(mapStateToProps, mapDispatchToProps)(FreelanceThematicPostComponent);