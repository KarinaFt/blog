import React from 'react'
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import './CommentCard.scss'
import moment from 'moment';

export const CommentCard = (props) => {
    const {children} = props;
    let date = moment(props.created_at).format('LLL');

    return (
        <>
            <div className='comment-card'>
                <img className='avatar' alt='user' src={(props.avatar)}/>
                <div className='comment-card__box'>

                    <div className='comment-card__first-container'>
                        <Title lgFontSize>
                            #{props._id} {props.name}
                        </Title>

                        <Content mdFontSize primary>
                            {date}
                        </Content>

                        {children}
                    </div>

                    <div className='comment-card__second-container'>
                        <Content mdFontSize>
                            {props.comment}
                        </Content>
                    </div>
                </div>

            </div>

            <img className='line-image' alt='line' src={require('../../assets/images/line.png')}/>
        </>
    )
};