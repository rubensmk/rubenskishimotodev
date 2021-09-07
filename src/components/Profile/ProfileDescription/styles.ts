import styled from 'styled-components';

export const Container = styled.div`
    width: 34rem;
    font-weight: 400;

    strong{
        color: var(--secondary);
    }
    h1{
        font-size: 2.25rem;
        font-weight: 500;
    }
    h2{
        font-size:1.6rem;
        margin-bottom:1rem;
    }
    p{
        font-size:1rem;
        text-align: left;
        line-height: 1.3rem;
        a{
            font-style: italic;
        }
    }

    @media(max-width:1440px){
        width: 32rem;

        h1{
            font-size:1.8rem;
        }
        h2{
            font-size: 1.6rem;
        }
    }

    @media(max-width:1024px){
        width: 30rem;

        h1{
            font-size:1.75rem;
        }
        h2{
            font-size: 1.4rem;
        }
        
    }

    @media(max-width:768px){
            width: 25rem;

            h1{
                font-size:1.5rem;
                }
            h2{
                font-size: 1.2rem;
                }
            p{
                font-size:0.9rem;
                text-align: left;
                line-height: 1.2rem;
                a{
                    font-style: italic;
                    }
                }
    }
    
    

    @media(max-width:425px){
        width: 100%;

        strong{
            font-size: 1rem;
        }
        h1{
            font-size:1.4rem;
        }
        h2{
            font-size: 1.3rem;
        }
        p{
            font-size:0.9rem;
            strong{
                font-size: 0.9rem;
            }
        }
    }

`;