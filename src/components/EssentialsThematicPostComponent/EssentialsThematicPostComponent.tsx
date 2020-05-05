import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import '../../components/BoxCard/BoxCard.scss'
import {getEssentialsThematicPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getEssentialsThematicPostAction?: any,
    isLoading?: boolean,
    essentialsThematicPost?: any,
}

class EssentialsThematicPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getEssentialsThematicPostAction();
    };

    render() {
        let renderEssentialsThematicPost = this.props.essentialsThematicPost.map((post: any) =>
            <ThematicBlogCard key={post._id} {...post}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderEssentialsThematicPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        essentialsThematicPost: state.postsReducers.essentialsThematicPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getEssentialsThematicPostAction: () => dispatch(getEssentialsThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssentialsThematicPostComponent);