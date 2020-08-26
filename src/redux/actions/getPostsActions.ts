import {
    getAuthorPostReceiveAction,
    getCommentsListReceiveAction,
    getEssentialsPostReceiveAction,
    getEssentialsThematicPostReceiveAction,
    getFeaturedPostReceiveAction,
    getFreelancePostReceiveAction,
    getFreelanceThematicPostReceiveAction,
    getListPostsFailure,
    getListPostsReceiveAction, getListPostsRequest,
    getPopularPostReceiveAction,
    getPopularThematicPostReceiveAction,
    sendCommentReceiveAction
} from './PostsActionsCreators';
import {postsBlogService} from '../service/postsBlogService';

export function getListPostsAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getListPosts()
            .then((response: any) => {
                dispatch(getListPostsReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getFeaturedPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getFeaturedPost()
            .then((response: any) => {
                dispatch(getFeaturedPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            );
    }
}

export function getPopularPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getPopularPosts()
            .then((response: any) => {
                dispatch(getPopularPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getEssentialsPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getEssentialsPost()
            .then((response: any) => {
                dispatch(getEssentialsPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getFreelancePostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getFreelancePost()
            .then((response: any) => {
                dispatch(getFreelancePostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getFreelanceThematicPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getFreelanceThematicPost()
            .then((response: any) => {
                dispatch(getFreelanceThematicPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getPopularThematicPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getPopularThematicPost()
            .then((response: any) => {
                dispatch(getPopularThematicPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch(getListPostsFailure(error))
            )
    }
}

export function getEssentialsThematicPostAction() {
    return (dispatch: any) => {
        dispatch(getListPostsRequest());
        postsBlogService.getEssentialsThematicPost()
            .then((response: any) => {
                dispatch(getEssentialsThematicPostReceiveAction(response.data.docs));
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
