import styled from 'styled-components';


export const Container = styled.main`
    width: 100%;
    margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3{
        font-family: "Spartan", "Helvetica",sans-serif;
        font-weight: 500;
        color:var(--gray_dark);
        font-size:1.4rem;
        margin-bottom:1rem;
    }
`;


export const Content  = styled.div`
    width: 100%;
    height: 50rem;
    padding:1.2rem 1rem;
    border: 2px solid var(--border);
    border-radius:1rem;


`;