import React from 'react';
import './ThematicBlogCard.scss'
import {Title} from '../Title/Title';

export const ThematicBlogCard: React.FC = (props: any) => {

    return (
        <div key={props._id} className="thematic-blog-card thematic-blog-card--hovered">
            <p className="thematic-blog-card__theme">
                {props.tags}
            </p>

            <Title mixin={'thematic-blog-card__title thematic-blog-card__title--hovered'}>
                {props.title}
            </Title>
        </div>
    )
};