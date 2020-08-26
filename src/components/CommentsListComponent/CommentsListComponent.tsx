import React, {Component} from 'react';
import {connect} from 'react-redux'
import Loading from '../Healpers/Loading';
import {CommentCard} from '../CommentCard/CommentCard';
import {OutlineButton} from '../OutlineButton/OutlineButton';
import {getCommentsListAction} from '../../redux/actions/getPostsActions';
import {getUserIdAction} from '../../redux/actions/PostsActionsCreators';

interface IProps {
    getCommentsListAction?: any,
    getUserIdAction?: any,
    commentsList?: any,
    isLoading?: boolean,
}

class CommentsListComponent extends Component <IProps, {}> {

    componentDidMount(): void {
        this.props.getCommentsListAction();
    }

    getUserData(id, name) {
        let userData = {id, name};
        this.props.getUserIdAction(userData)
    }

    render() {
        let renderComment = this.props.commentsList.map((comment: any) =>
            <CommentCard{...comment} key={comment._id}>
                <OutlineButton href='#form' onClick={() => this.getUserData(comment._id, comment.name)}>
                    Reply
                </OutlineButton>
            </CommentCard>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderComment}</>}
            </>
        )
    }
};
const mapStateToProps = (state: any) => {
    return {
        commentsList: state.postsReducers.commentsList,
        isLoading: state.postsReducers.isLoading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCommentsListAction: () => dispatch(getCommentsListAction()),
        getUserIdAction: (userDate) => dispatch(getUserIdAction(userDate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListComponent);

