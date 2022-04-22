import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    padding: 0.5rem;

`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-around;

    p{
        color:var(--gray_input);
        font-weight: 500;
        font-size:1rem;
        padding: 1rem 2rem;
        font-family:"Spartan", "Helvetica",sans-serif;

    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:space-between;
    border: 2px solid var(--border);
    padding:0.5rem 1rem;
    border-radius: 1rem;

    cursor: alias;
    background: transparent;


    color:var(--gray_input);
    font-family:"Spartan", "Helvetica",sans-serif;
    font-weight: 600;
    font-size:1rem;

    &:hover{
        border: 2px solid var(--green_light);

    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;

    img{
        width:3rem;
        border-radius: 1.5rem;
        height:3rem;
        margin-right: 1.5rem;
    }

    color:var(--shape);
    font-family:"Spartan", "Helvetica",sans-serif;
    font-weight: 700;
    font-size:1rem;

`;


export const User_contact = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;

    p{
        padding:0 2rem;
    }
`;
