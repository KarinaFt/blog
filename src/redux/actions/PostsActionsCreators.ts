import {
    GET_AUTHOR_POST_SUCCESS,
    GET_COMMENTS_LIST_SUCCESS,
    GET_ESSENTIALS_POST_SUCCESS, GET_ESSENTIALS_THEMATIC_POST_SUCCESS,
    GET_FEATURED_POST_SUCCESS, GET_FREELANCE_POST_SUCCESS, GET_FREELANCE_THEMATIC_POST_SUCCESS,
    GET_LIST_POSTS_SUCCESS,
    GET_POPULAR_POST_SUCCESS, GET_POPULAR_THEMATIC_POST_SUCCESS, GET_POST_FAILURE, GET_POSTS_REQUEST, GET_USER_ID,
    SEND_COMMENT_SUCCESS
} from '../reducers/postsReducers';

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

export function getFeaturedPostReceiveAction(featuredPost: any) {
    return {
        type: GET_FEATURED_POST_SUCCESS,
        payload: featuredPost
    };
}

export function getPopularPostReceiveAction(popularPost: any) {
    return {
        type: GET_POPULAR_POST_SUCCESS,
        payload: popularPost
    };
}

export function getEssentialsPostReceiveAction(essentialsPost: any) {
    return {
        type: GET_ESSENTIALS_POST_SUCCESS,
        payload: essentialsPost
    };
}

export function getFreelancePostReceiveAction(freelancePost: any) {
    return {
        type: GET_FREELANCE_POST_SUCCESS,
        payload: freelancePost
    };
}

export function getFreelanceThematicPostReceiveAction(freelanceThematicPost: any) {
    return {
        type: GET_FREELANCE_THEMATIC_POST_SUCCESS,
        payload: freelanceThematicPost
    };
}

export function getPopularThematicPostReceiveAction(popularThematicPost: any) {
    return {
        type: GET_POPULAR_THEMATIC_POST_SUCCESS,
        payload: popularThematicPost
    };
}

export function getEssentialsThematicPostReceiveAction(essentialsThematicPost: any) {
    return {
        type: GET_ESSENTIALS_THEMATIC_POST_SUCCESS,
        payload: essentialsThematicPost
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