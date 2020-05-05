import {postsReducers} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    postsReducers,
});

export default rootReducers;