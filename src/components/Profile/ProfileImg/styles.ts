import styled from 'styled-components'

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  border-radius: 3px;
  width: 264px;
  height: 264px;
  z-index: 1;
  transition: 0.5s ease;
  border-radius: 50%;

  @media (max-width: 1440px) {
    width: 215px;
    height: 220px;
  }

  @media (max-width: 1024px) {
    width: 215px;
    height: 220px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border: 2px solid var(--btn-text);

    &:hover {
      transform: translateY(-12px);
      border-color: var(--secondary);
    }
  }

  @media (max-width: 628px) {
    width: 150px;
    height: 150px;
    margin-top: 24px;
  }
`

export const Frame = styled.div`
  position: absolute;
  right: 452px;
  top: 334px;
  width: 234px;
  height: 244px;
  border: 2px solid var(--secondary);
  border-radius: 3px;
  background-color: var(--secondary);

  @media (max-width: 1440px) {
    position: absolute;
    right: 269px;
    top: 285px;
    width: 206px;
    height: 214px;
  }

  @media (max-width: 1024px) {
    width: 215px;
    height: 220px;
    position: absolute;
    right: 126px;
    top: 280px;
    width: 206px;
    height: 214px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid var(--btn-text);
    visibility: hidden;
    &:hover {
      transform: translateY(-12px);
      border-color: var(--secondary);
    }
  }
`
