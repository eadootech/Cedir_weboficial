import styled from 'styled-components';

export const Container = styled.button`


    width:100%;
    display:flex;
    align-items:center;
    padding:0.5rem;
    background: transparent;
    border: 2px solid var(--border);
    border-radius:1rem;
    margin-bottom: 0.7rem;


    
    cursor: pointer;
    .image_container{
        width:4.5rem;
        border-radius: 2rem;
        img{
            width:100%;
            height:4rem;
            border-radius: 2rem;
        }
    };

    .text_Container{
        width: 100%;
        display:flex;
        align-items:flex-start;
        flex-direction: column;
        padding: 0.5em 1rem;
        h3{
        font-family: "Spartan", "Helvetica",sans-serif;
        font-weight: 600;
        color:var(--shape);
        font-size: 1.55rem;
        text-align: left;
        margin: 0
        };

        p{
        font-family: "Spartan", "Helvetica",sans-serif;
        font-weight: 500;
        color:var(--gray_dark);
        font-size: 1rem;
        padding-top:0.5rem;
        }
    }



    

`;
