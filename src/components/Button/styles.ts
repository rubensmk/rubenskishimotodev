import styled, { css } from 'styled-components'
import Link from 'next/link'

interface ContentProps {
  color?: string
}

export const Container = styled(Link)``

export const Content = styled.div<ContentProps>`
  display: inline-block;
  padding: ${(props) =>
    props.color === 'gray' ? css`8px 28px;` : css`12px 32px;`};
  border-radius: 3px;
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
  cursor: pointer;

  background: ${(props) =>
    props.color === 'gray'
      ? css`var(--btn-background)`
      : css`linear-gradient(225deg, var(--secondary) 0%, #b31317 100%)`};

  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 30%;
    height: 70%;
    opacity: 0;
    border-radius: 3px;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 30%;
    height: 70%;
    opacity: 0;
    -webkit-transition: 0.7s ease;
    transition: 0.7s ease;
    border-radius: 3px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
  }

  &:hover {
    -webkit-transform: skew(-10deg) scale(1.05);
    transform: skew(-10deg) scale(1.05);
    -webkit-transition: 0.7s ease;
    transition: 0.7s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  @media (max-width: 425px) {
    padding: 8px 28px;
  }
`

export const Title = styled.strong`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
`
