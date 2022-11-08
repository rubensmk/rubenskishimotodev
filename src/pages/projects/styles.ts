import styled from 'styled-components'

interface FilterTagProps {
  isSelected: boolean
}

export const Container = styled.main`
  height: 100%;

  @media (max-width: 320px) {
    margin-left: 1.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 6rem;
  margin-bottom: 4rem;

  @media (max-width: 425px) {
    margin-top: 2rem;
  }

  @media (max-width: 320px) {
    gap: 3.8rem;
  }
`

export const Projects = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  padding-bottom: 6rem;

  @media (max-width: 425px) {
    row-gap: 1rem;
    width: 90%;

    padding-bottom: 2rem;
  }
`

export const Loading = styled.div`
  height: 40vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OtherButton = styled.a.attrs({
  href: 'https://github.com/rubensmk',
  target: '_blank',
  rel: 'noreferrer',
})`
  display: block;
  width: 12rem;
  text-align: center;
  padding: 0.7rem 0;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 3px;

  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
  background: linear-gradient(225deg, var(--secondary) 0%, #b31317 100%);

  transition: all 0.4s linear;

  &:hover {
    -webkit-filter: brightness(1.4);
    filter: brightness(1.4);
  }
`

export const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 6rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 425px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    margin-bottom: 1rem;
  }
`

export const FilterResults = styled.span`
  margin-bottom: 4rem;
  width: 80%;
  padding: 16px;
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 425px) {
    margin-bottom: 1rem;
    font-size: 1rem;
    padding: 8px;
    width: 70%;
  }
`

export const FilterTag = styled.div<FilterTagProps>`
  min-width: 128px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;

  background: linear-gradient(225deg, var(--secondary) 0%, #b31317 100%);
  text-transform: uppercase;

  cursor: pointer;
  border: 2px solid
    ${({ isSelected }) => (isSelected ? 'var(--text)' : '#b31317')};

  @media (max-width: 425px) {
    width: 132px;
  }

  @media (max-width: 320px) {
    min-width: 248px;
    height: 38px;
  }
`
