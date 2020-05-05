import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {BoxCard} from "../BoxCard/BoxCard";
import {getEssentialsPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getEssentialsPostAction?: any,
    essentialsPost?: any,
    isLoading?: boolean,
}

class EssentialsPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getEssentialsPostAction();
    };

    render() {
        let renderEssentialsPost = this.props.essentialsPost.map((post: any) => {
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
        essentialsPost: state.postsReducers.essentialsPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getEssentialsPostAction: () => dispatch(getEssentialsPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssentialsPostComponent);