import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;

    @media (max-width:320px){
        margin-left: 1.5rem;
    }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 6rem;
    margin-bottom:4rem;

    @media (max-width:425px){
        margin-top: 2rem; 
    }

    @media (max-width:320px){
        gap: 3.8rem;
    }
`;


export const Projects = styled.div`
        display: flex;
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        row-gap: 2rem;
        column-gap: 1rem;

    @media(max-width:425px){
          row-gap: 4rem;
    }
`;

export const OtherButton = styled.a.attrs({
    href: 'https://github.com/rubensmk',
    target: '_blank',
    rel: 'noreferrer'
})`
    display: block;
    width:12rem;
    text-align: center;
    padding: 0.7rem 0;
    margin-top: 2rem;
    font-size: 1.3rem;
    border-radius: 3px;
    -webkit-transform: skew(-10deg);
    transform: skew(-10deg);
    background: linear-gradient(225deg, var(--secondary) 0%, #b31317 100%);

    transition:all 0.6s ease;
    
    &:hover{
        -webkit-filter: brightness(1.4);
        filter:brightness(1.4)
    }
`;