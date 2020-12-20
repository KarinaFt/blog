import {
    GET_AUTHOR_POST_SUCCESS,
    GET_COMMENTS_LIST_SUCCESS,
    GET_LIST_POSTS_SUCCESS,
    GET_POST_FAILURE,
    GET_POST_SUCCESS,
    GET_POSTS_REQUEST,
    GET_USER_ID,
    SEND_COMMENT_SUCCESS
} from '../reducers/postsReducers';


export function getPostReceiveAction(post: any) {
    return {
        type: GET_POST_SUCCESS,
        payload: post
    };
}

export function getListPostsRequest() {
    return {
        type: GET_POSTS_REQUEST,
    };
}

export function getListPostsReceiveAction(listPosts: any) {
    return {
        type: GET_LIST_POSTS_SUCCESS,
        payload: listPosts
    };
}

export function getCommentsListReceiveAction(commentsList: any) {
    return {
        type: GET_COMMENTS_LIST_SUCCESS,
        payload: commentsList
    };
}

export function sendCommentReceiveAction(sendComment: any) {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload: sendComment
    };
}

export function getUserIdAction(userData: string) {
    return {
        type: GET_USER_ID,
        payload: userData
    };
}

export function getAuthorPostReceiveAction(authorPost: string) {
    return {
        type: GET_AUTHOR_POST_SUCCESS,
        payload: authorPost
    };
}

export function getListPostsFailure(error: any) {
    return {
        type: GET_POST_FAILURE,
        payload: error
    };
}