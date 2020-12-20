import {
    getAuthorPostReceiveAction,
    getCommentsListReceiveAction,
    getListPostsFailure,
    getListPostsReceiveAction, getListPostsRequest,
    getPostReceiveAction,
    sendCommentReceiveAction
} from './PostsActionsCreators';
import {postsBlogService} from '../service/postsBlogService';

export function getPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getPost()
            .then((response: any) => {
                dispatch(getPostReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getListPostsAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getListPosts()
            .then((response: any) => {
                dispatch(getListPostsReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getCommentsListAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getCommentsList()
            .then((response: any) => {
                dispatch(getCommentsListReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getAuthorPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getAuthorPost()
            .then((response: any) => {
                dispatch(getAuthorPostReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function sendCommentAction(comment, name, email, replyTo) {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.sendComment(comment, name, email, replyTo)
            .then((response: any) => {
                dispatch(sendCommentReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}
