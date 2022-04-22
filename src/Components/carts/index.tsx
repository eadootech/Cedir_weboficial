import React from 'react';
import {Container} from './styles';

interface PropsCards{
    title: string;
    message: string;
    picture:string;
}

export function Carts({
    message,
    picture,
    title,
    ...rest
}:PropsCards) {
    return(
        <Container
            {...rest}
        >

            <div className="image_container">
            <img
                src={picture}
            />
            </div>

            <div className="text_Container">
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
        </Container>
    );
}