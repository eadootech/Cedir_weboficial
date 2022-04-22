import React from 'react';
import {Container,Header,Content,User,User_contact} from './styles'

import MessageSvg from '../../assets/Message.svg';


interface PropsPacientDetails{

    userImg: string;
    name: string;
    age: string;
    orderWorking: string;
    contact:string;
}

export function PatientDetail({
    age,
    contact,
    name,
    orderWorking,
    userImg,
}:PropsPacientDetails){

    return(

        
       <Container>

          <Content>
            <User>
                <img
                src={userImg}
                />

                <p>{name}</p>
            </User>

            <p>{age}</p>
            <p>{orderWorking}</p>

            <User_contact>
                <p>{contact}</p>
                <img
                    src={MessageSvg}
                />
            </User_contact>
          </Content>

       </Container>
    );
}