import React, {Component} from 'react'
import {Title} from '../Title/Title';
import {OutlineButton} from '../OutlineButton/OutlineButton';
import {Content} from '../Content/Content';
import './CommentPolicyBox.scss'
import {connect} from 'react-redux';
import {getUserIdAction} from '../../redux/actions/PostsActionsCreators';

interface IProps {
    getUserIdAction?: any,
}

class CommentPolicyBox extends Component <IProps, {}> {

    cleanUserData(id, name) {
        let userData = {id, name};
        this.props.getUserIdAction(userData)
    }

    render() {
        return (
            <>
                <div className='comment-policy-box'>
                    <Title xxlFontSize>
                        Comments
                    </Title>

                    <OutlineButton href='#form' secondary onClick={() => this.cleanUserData([], [])}>
                        Leave a Comment
                    </OutlineButton>

                </div>
                <Content mdFontSize>
                    Comment policy: We love comments and appreciate the time that readers spend to share ideas and
                    give feedback.
                    However, all comments are manually moderated and those deemed to be spam or solely promotional will
                    be deleted.
                </Content>
            </>

        )
    }
};

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.postsReducers.isLoading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserIdAction: (userDate) => dispatch(getUserIdAction(userDate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPolicyBox);
