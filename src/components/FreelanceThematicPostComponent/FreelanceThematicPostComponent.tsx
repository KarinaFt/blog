import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import '../../components/BoxCard/BoxCard.scss'
import {getFreelanceThematicPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getFreelanceThematicPostAction?: any,
    isLoading?: boolean,
    freelanceThematicPost?: any,
}

class FreelanceThematicPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getFreelanceThematicPostAction();
    };

    render() {
        let renderMainCard = this.props.freelanceThematicPost.map((post: any) =>
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
        freelanceThematicPost: state.postsReducers.freelanceThematicPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFreelanceThematicPostAction: () => dispatch(getFreelanceThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FreelanceThematicPostComponent);