import React from 'react';
import {Content} from '../Content/Content';
import {Title} from '../Title/Title';
import './SubscribeBox.scss'
import {EmailInput} from '../EmailInput/EmailInput';
import {Button} from '../Button/Button';

export const SubscribeBox: React.FC = () => {

    return (
        <div className='subscribe-box'>
            <Title mixin='subscribe-box__title' extraXlFontSize>
                Get free web design insights...
            </Title>
            <Content mixin='subscribe-box__content'>
                In your inbox, every other week. And unsubscribe in a click, if you want.
            </Content>

            <form className='subscribe-input'>
                <EmailInput mixin='subscribe-input__email' placeholder='Your email'/>
                <Button mixin='subscribe-input__button'>
                    Subscribe
                </Button>
            </form>
        </div>
    )
};