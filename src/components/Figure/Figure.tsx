import React from 'react';

export const Figure: React.FC = (props: any) => {
    const {children} = props;

    return (
        <figure>
            {children}
        </figure>
    )
};