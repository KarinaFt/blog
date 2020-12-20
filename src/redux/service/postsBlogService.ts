import axios from "axios";
import {Component} from "react";
import './axiosConfig'

export class postsBlogService extends Component {
    static get appURL() {
        return axios.defaults.baseURL;
    }

    static get newPostUrl() {
        return '/post'
    }

    static get listPostsUrl() {
        return '/posts'
    }

    static get commentsUrl() {
        return '/comments'
    }

    static get authorUrl() {
        return '/author'
    }

    static getPost() {
        return axios.get(this.appURL + this.newPostUrl)
    }

    static getCommentsList() {
        return axios.get(this.appURL + this.commentsUrl)
    }

    static sendComment(comment, name, email, replyTo) {
        return axios.post(this.appURL + this.commentsUrl, {comment, name, email, replyTo})
    }

    static getAuthorPost() {
        return axios.get(this.appURL + this.authorUrl)
    }

    static getListPosts() {
        return axios.get( this.appURL +this.listPostsUrl)
    }

}