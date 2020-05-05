import React from 'react';
import './Checkbox.scss'

export const Checkbox = (props: any) => {
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
