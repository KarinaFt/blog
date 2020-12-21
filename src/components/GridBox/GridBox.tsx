import React from 'react';
import './GridBox.scss'
import {IProps} from "../../interfaces/interface";

export const GridBox: React.FC = (props: IProps) => {
    const {children} = props;

    return (
        <div className='grid'>
            <div className='grid-box'>
                <span className='grid-box--hovered'>View all</span>
            </div>
            <div className='thematic-cards-box'>
                {children}
            </div>
        </div>
    )
};