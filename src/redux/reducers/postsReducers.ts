export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const GET_FEATURED_POST_SUCCESS = 'GET_FEATURED_POST_SUCCESS';
export const GET_POPULAR_POST_SUCCESS = 'GET_POPULAR_POST_SUCCESS';
export const GET_ESSENTIALS_POST_SUCCESS = 'GET_ESSENTIALS_POST_SUCCESS';
export const GET_FREELANCE_POST_SUCCESS = 'GET_FREELANCE_POST_SUCCESS';
export const GET_FREELANCE_THEMATIC_POST_SUCCESS = 'GET_FREELANCE_THEMATIC_POST_SUCCESS';
export const GET_POPULAR_THEMATIC_POST_SUCCESS = 'GET_POPULAR_THEMATIC_POST_SUCCESS'
export const GET_ESSENTIALS_THEMATIC_POST_SUCCESS = 'GET_FREELANCE_ESSENTIALS_POST_SUCCESS'
export const GET_COMMENTS_LIST_SUCCESS = 'GET_COMMENTS_LIST_SUCCESS';
export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
export const GET_NEW_POST_SUCCESS = 'GET_NEW_POST_SUCCESS';
export const GET_USER_ID = 'GET_USER_ID';
export const GET_AUTHOR_POST_SUCCESS = 'GET_AUTHOR_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';

const initialState = {
    popularPost: [],
    freelancePost: [],
    essentialsPost: [],
    featuredPost: [],
    listPosts: [],
    freelanceThematicPost: [],
    popularThematicPost: [],
    essentialsThematicPost: [],
    commentsList: [],
    sendComment: [],
    userData: [],
    authorPost: [],
    errors: [],
    isLoading: false
};

export function postsReducers(state: any = initialState, action: any) {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                errors: [],
            };
        case GET_POPULAR_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                popularPost: action.payload,
            };
        case GET_FREELANCE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                freelancePost: action.payload,
            };
        case GET_ESSENTIALS_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                essentialsPost: action.payload,
            };
        case GET_FEATURED_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                featuredPost: action.payload,
            };
        case GET_LIST_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listPosts: action.payload,
            };
        case GET_FREELANCE_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                freelanceThematicPost: action.payload,
            };
        case GET_POPULAR_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                popularThematicPost: action.payload,
            };
        case GET_ESSENTIALS_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                essentialsThematicPost: action.payload,
            };
        case GET_COMMENTS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                commentsList: action.payload,
            };
        case SEND_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                sendComment: action.payload,
            };
        case GET_USER_ID:
            return {
                ...state,
                isLoading: false,
                userData: action.payload
            };
        case GET_AUTHOR_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authorPost: action.payload
            };
        case GET_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        default:
            return state
    }
}