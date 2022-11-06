import styled from 'styled-components'
import { FcFolder } from 'react-icons/fc'

export const Card = styled.div`
  width: 220px;
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    width: 180px;
  }
`

export const CardTitle = styled.strong`
  color: var(--text);
  background: transparent;
  text-align: center;

  font-weight: 600;
  font-size: 1.4rem;
  border-radius: 2px;
  text-shadow: 0px 0px 25px rgba(58, 58, 58, 0.8);
  width: 100%;
  height: 32px;

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`

export const Folder = styled(FcFolder)`
  width: 96px;
  height: 96px;
  cursor: pointer;

  transition: opacity 250ms ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 425px) {
    width: 64px;
    height: 64px;
  }
`
