import styled from 'styled-components';

export const Card = styled.div`
    width: 340px;
    height: 224px;
    background: rgba(42, 60, 71, 0.95);
    border-radius: 5px;
    transform: matrix(0.99, 0, -0.12, 1, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.7s ease;

    &:hover{
       transform: translateY(6px);
       cursor: pointer;
    }

    @media(max-width:425px){
        width: 280px;
        height: 164px;
    }

    @media(max-width:320px){
        width: 240px;
        height: 124px;
    }

`;

export const CardTitle = styled.h1`
        color:var(--text);
        background: transparent;

        font-weight: 600;
        font-size: 1.8rem;
        border-radius: 2px;
        position: relative;
        visibility:visible;
        bottom:18px;
        text-shadow: 1px -5px 11px var(--primary);
`;

export const CardImage = styled.img`
        border-radius: 5px;
        width: 100%;
        height: 100%;
`;