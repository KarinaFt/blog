import React from 'react';
import './Checkbox.scss'
import {IProps} from "../../interfaces/interface";

export const Checkbox = (props: IProps) => {
    const {children} = props;

    return (
        <label className='checkbox'>
            <input className='checkbox__input'
                   required
                   type="checkbox"
                   name="scales"/>
            {children}
        </label>
    );
};
