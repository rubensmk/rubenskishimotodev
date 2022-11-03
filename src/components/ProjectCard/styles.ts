import styled from 'styled-components'

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

  &:hover {
    transform: translateY(6px);
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 280px;
    height: 164px;
  }

  @media (max-width: 320px) {
    width: 240px;
    height: 124px;
  }
`

export const CardTitle = styled.h1`
  color: white;
  background: transparent;
  text-align: center;

  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 2px;

  position: relative;
  z-index: 99;
  visibility: visible;
  bottom: 2rem;
  text-shadow: 0px 0px 25px rgba(58, 58, 58, 0.8);
`

export const CardImage = styled.img`
  position: absolute;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`
