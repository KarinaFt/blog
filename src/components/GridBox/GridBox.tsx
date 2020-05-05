import React from 'react';
import './GridBox.scss'

export const GridBox: React.FC = (props: any) => {
    const {children} = props;

    return (
        <div>
            <div className='grid-box'>
                <span className='grid-box--hovered'>View all</span>
            </div>
            <div className='thematic-cards-box'>
                {children}
            </div>
        </div>
    )
};