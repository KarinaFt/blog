import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NameInput} from '../NameInput/NameInput';
import {EmailInput} from '../EmailInput/EmailInput';
import {Button} from '../Button/Button';
import './CommentsFormComponent.scss'
import {Checkbox} from '../Checkbox/Checkbox';
import {Content} from '../Content/Content';
import {sendCommentAction} from '../../redux/actions/getPostsActions';

interface IState {
    comment?: string,
    name?: string,
    email?: string,
}

interface IProps {
    sendCommentAction?: any,
    userData?: any,
}

class CommentsFormComponent extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            name: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.userData.id;
        let userName = this.props.userData.name;

        if (prevProps.userData.id !== userId) {

            if (userId.length === 0) {
                this.setState({
                    comment: ''
                })
            } else {
                this.setState({
                    comment: `Re: #${userId} ${userName}, `
                })
            }
        }
    }

    handleChange(event: any) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const {email, name, comment} = this.state;
        let replyTo = this.props.userData.id;

        this.props.sendCommentAction(comment, name, email, replyTo);

        this.setState({
            comment: '',
            name: '',
            email: ''
        })
    };

    render() {
        const {email, name, comment} = this.state;

        return (
            <form id='form'
                  className='comments-form'
                  name='comments-form'
                  onSubmit={this.handleSubmit}>
                <textarea required
                          rows={8}
                          name='comment'
                          className='entry-field textarea'
                          placeholder='Comment'
                          value={comment}
                          onChange={this.handleChange}/>
                <NameInput mixin='entry-field entry-field__name'
                           value={name}
                           name='name'
                           onChange={this.handleChange}/>
                <EmailInput mixin='entry-field entry-field__email'
                            value={email}
                            name='email'
                            onChange={this.handleChange}
                            placeholder='Email'/>

                <Checkbox id='scales'>
                    <Content primary mdFontSize>
                        <span>
                            I agree to the
                            <a className='link' href='#'> Terms and Conditions </a>
                            <span> and </span>
                            <a className='link' href='#'> Privacy Policy </a>
                        </span>
                    </Content>
                </Checkbox>

                <div>
                    <Button mixin='comments-form__button' disabled={!comment} type='submit'>
                        Post Comment
                    </Button>
                </div>
            </form>
        )
    }
};

const mapStateToProps = (state: any) => {
    return {
        userData: state.postsReducers.userData,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        sendCommentAction: (comment: string, name: string, email: string, replyTo: string) => dispatch(sendCommentAction(comment, name, email, replyTo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsFormComponent);

