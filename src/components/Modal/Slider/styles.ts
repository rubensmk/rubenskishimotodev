import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
`;

export const Content = styled.div`
    padding: 1rem;

    width: 900px;
    height: 460px;

    @media(max-width: 425px) {
        width: 520px;
        height: 280px;

    }
`;