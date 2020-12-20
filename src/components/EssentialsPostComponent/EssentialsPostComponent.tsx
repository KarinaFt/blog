import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {BoxCard} from "../BoxCard/BoxCard";
import {getPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPostAction?: any,
    post?: any,
    isLoading?: boolean,
}

class EssentialsPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
    };

    render() {
        let renderEssentialsPost = this.props.post.map((post: any) => {
            return <BoxCard {...post} key={post._id}/>;
        });

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderEssentialsPost}</>}
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

export default connect(mapStateToProps, mapDispatchToProps)(EssentialsPostComponent);