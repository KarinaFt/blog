import React from 'react';
import './ImageBox.scss'

export const ImageBox: React.FC = (props: any) => {
    const imagePostStyle = (props.imagePost ? 'featured-img--post-styles' : 'featured-img');
    const imageFigureStyle = (props.imageFigure ? 'featured-img--figure-styles' : '');

    return (
        <div key={props._id}>
            <img className={`${imagePostStyle} ${imageFigureStyle} featured-img--hovered`} alt='nature'
                 src={(props.featuredImage)}/>
        </div>
    )
}

