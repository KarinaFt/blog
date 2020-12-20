import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../Healpers/Loading";
import {BoxCard} from "../BoxCard/BoxCard";
import {getPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPostAction?: any,
    post?: any,
    isLoading?: boolean,
}

class PopularPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPostAction();
    };

    render() {
        let renderPopularPost = this.props.post.map((post: any) => {
            return <BoxCard {...post} key={post._id}/>;
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularPostComponent);