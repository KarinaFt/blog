import React from 'react';
import './ImageBox.scss'

interface IProps {
    imageFigure?: boolean;
    imagePost ?: boolean;
    mixin?: string;
    id?:string;
    image?:string
}
export const ImageBox = (props: IProps) => {
    const imagePostStyle = (props.imagePost ? 'featured-img--post-styles' : 'featured-img');
    const imageFigureStyle = (props.imageFigure ? 'featured-img--figure-styles' : '');

    return (
        <div key={props.id}>
            <img className={`${imagePostStyle} ${imageFigureStyle} featured-img--hovered`} alt='nature'
                 src={(props.image)}/>
        </div>
    )
}

