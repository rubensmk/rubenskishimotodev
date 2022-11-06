import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 830px;
  height: 450px;
  padding: 24px 0;

  @media (max-width: 425px) {
    height: 228px;
  }
`
