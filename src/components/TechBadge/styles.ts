import styled from 'styled-components/';

interface ContainerProps {
    color: string;
    text_color: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;

    border-radius:5px;
    margin-top: 0.6rem;
    background: ${props => props.color};
    width: 150px;

    margin-right: 1rem;

    p{
        color: ${props => props.text_color};
        margin-left: 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
    }

    @media(max-width:1440px){
        width: 144px;
    }

    @media(max-width:425px){
        width: 160px;
        height: 30px;
    }
`;