import styled from 'styled-components'

export const Container = styled.main`
  height: 85vh;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    margin-left: 0.8rem;
  }
`
