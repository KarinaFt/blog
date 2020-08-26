import React from 'react';
import {Title} from '../Title/Title';
import {EmailInput} from '../EmailInput/EmailInput';
import {Button} from '../Button/Button';
import './SubscribeSmallBox.scss'

export const SubscribeSmallBox: React.FC = () => {

    return (
            <div className='subscribe-small-box'>
                <Title mixin='subscribe-small-box__title' lg-second-font-size>
                    SUBSCRIBE
                </Title>

                <form className='subscribe-small-box__form'>
                    <EmailInput mixin='subscribe-small-box__email' placeholder='Your email'/>
                    <Button mixin='subscribe-small-box__button'>
                        Subscribe
                    </Button>
                </form>
            </div>
    )
};