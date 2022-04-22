import React from 'react';
import { Carts } from '../carts';
import {
    Container,
    Content
} from './styled';
import person_one_jpg from '../../assets/Person/person1.png';
import person_two_jpg from '../../assets/Person/person2.png';
import person_three_jpg from '../../assets/Person/person3.png';
import person_for_jpg from '../../assets/Person/person4.png';
import person_six_jpg from '../../assets/Person/person6.png';
import person_seven_jpg from '../../assets/Person/person7.png';
import person_finish_jpg from '../../assets/Person/person8.png';




const data = [
    {
        name:"Júlio Adalvo",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_one_jpg
    },

    {
        name:"Marcelo Santos",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_two_jpg
    },

    {
        name:"Jorge Monteiro",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_three_jpg
    },

    {
        name:"Carlos Barreto",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_for_jpg
    },

    {
        name:"Carimbo berraza",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_six_jpg
    },

    {
        name:"Renan Carvalho",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_seven_jpg
    },

    {
        name:"Ana maria",
        message:"Boa tarde, seu exame foi confirmado!",
        picture:person_finish_jpg
    },
]

export function Chats(){
    return(
        <Container>
            <h3>Conversas</h3>

            <Content>
               {
                   data.map((item) => <Carts 
                   title={item.name}
                   message={item.message}
                   picture={item.picture}
                   />)
               }
            </Content>
        </Container>

    );
}