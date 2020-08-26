import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../Healpers/Loading";
import {BoxCard} from "../BoxCard/BoxCard";
import {getPopularPostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getPopularPostAction?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class PopularPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularPostAction();
    };

    render() {
        let renderPopularPost = this.props.popularPost.map((post: any) => {
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
        popularPost: state.postsReducers.popularPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularPostComponent);