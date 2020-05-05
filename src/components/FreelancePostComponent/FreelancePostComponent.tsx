import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../Healpers/Loading';
import {BoxCard} from '../BoxCard/BoxCard';
import {getFreelancePostAction} from '../../redux/actions/getPostsActions';

interface IProps {
    getFreelancePostAction?: any,
    freelancePost?: any,
    isLoading?: boolean,
}

class FreelancePostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getFreelancePostAction()
    };

    render() {
        let renderFreelancePostPost = this.props.freelancePost.map((post: any) => {
            return <BoxCard {...post} key={post._id}/>;
        });

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderFreelancePostPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        freelancePost: state.postsReducers.freelancePost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFreelancePostAction: () => dispatch(getFreelancePostAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FreelancePostComponent);