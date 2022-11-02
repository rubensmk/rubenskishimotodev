import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`

export const Content = styled.div`
  width: 90%;
  height: 420px;

  @media (max-width: 425px) {
    height: 228px;
  }
`
