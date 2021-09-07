import styled from 'styled-components';


export const Container = styled.main`
    height: 85vh;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content:space-evenly;
    align-items: center;

    @media(max-width:425px){
        flex-direction: column;
    }
    @media(max-width:320px){
        flex-direction: column;
        margin-left: 0.8rem;
    }
`;

export const Image = styled.div`
    width: 600px;
    height:600px;

    @media(max-width:1024px){
        width: 500px;
        height:500px;
    }

    @media(max-width:768px){
        width: 360px;
        height:360px;
    }

    @media(max-width:425px){
        width: 320px;
        height:320px;
    }
`;

export const Contact = styled.section`
    width: 30rem;
    height:12rem;

    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    @media(max-width:1024px){
        width: 20rem;
        height:12rem;
    }
    @media(max-width:768px){
        width: 18rem;
    }
    @media(max-width:425px){
        width: 18rem;
        height: 14rem;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    width: 100%;
    gap: 0.8rem;
`;

export const VerticalLine = styled.div`
    height: 28rem;
    border-left: 3px solid var(--text);

    @media(max-width:1024px){
        height: 24rem;
    }
    @media(max-width:768px){
        height: 22rem;
    }
    @media(max-width:425px){
        width:22rem;
        height: 1rem;
        border-left: 0;
        border-top:3px solid var(--text);
    }
`;