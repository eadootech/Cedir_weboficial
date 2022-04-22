import React,{useState} from 'react';

import {
    Container,
    Buttons,
    Buttons2,
    AnimationButton
} from './styles';


export function Switch(){

    const [isactive, setIsActive] = useState(true);


    function handleActivevalueButtonleaft(){
        document.getElementById('animatition').style.left="0";
        document.getElementById('animatition').style.borderRadius="1rem";
        setIsActive(true)
    };

    function handleActivevalueButtonrigth(){
        document.getElementById('animatition').style.left='50%';
        document.getElementById('animatition').style.borderRadius="1rem";
        setIsActive(false)

    };




    return(
        <Container>


            <AnimationButton
            id='animatition'
            style={{position: 'absolute',background:'red', left: 0,transition:'0.3s',zIndex:'-1'}}>
                &nbsp;
            </AnimationButton>
           <Buttons
           onClick={handleActivevalueButtonleaft} 
           style={{color: isactive ? '#ffff' : '#8D8D8D'}}
           >
            Ativas
           </Buttons>

           <Buttons2
            onClick={handleActivevalueButtonrigth}
            style={{color: isactive ? '#8D8D8D' : '#fff'}}
           >
            Concluídas
            </Buttons2> 


        </Container>
    );
}


