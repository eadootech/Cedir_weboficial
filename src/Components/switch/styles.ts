import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;
    width:26rem;
    position: relative;
    border-radius:1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #f4f4f4;


`;

export const Buttons = styled.button`
    width:13rem;
    height:3rem;
    background:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius:1rem 0rem 0rem 1rem;
    font-family: "Spartan", "Helvetica",sans-serif;
    font-weight: 700;
    color:var(--gray_input);
    font-size: 1.2rem;
    cursor: pointer;
    
`;


export const Buttons2 = styled.button`
    width:13rem;
    cursor: pointer;
    height:3rem;
    background:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius:0rem 1rem 1rem 0rem;

    font-family: "Spartan", "Helvetica",sans-serif;
    font-weight: 700;
    color:var(--gray_input);
    font-size: 1.2rem;
`;

export const AnimationButton = styled.button`


        background: rgb(90,204,134)  !important ;
        background: linear-gradient(90deg, rgba(90,204,134,1) 0%, rgba(90,204,134,1) 0%, rgba(122,229,130,1) 100%)  !important ;    border:0;
        color:var(--background);

        width:13rem;
        height:3rem;
        background:transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius:1rem 0rem 0rem 1rem;
        font-family: "Spartan", "Helvetica",sans-serif;
        font-weight: 700;
        color:var(--gray_input);
        font-size: 1.2rem;
`;
