import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'

export const Container = styled.main`
  height: 85vh;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
`

export const BlogCard = styled.div`
  border-bottom: 2px solid rgb(255, 245, 208, 0.2);
  width: 90%;
  height: 12rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;

  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 425px) {
    height: 8rem;
  }
`

export const BlogThumbnail = styled.img`
  border: 4px solid var(--text);
  border-radius: 50%;
  width: 9rem;
  height: 9rem;

  @media (max-width: 425px) {
    width: 5rem;
    height: 5rem;
    border: 2px solid var(--text);
  }
`

export const BlogDate = styled.span`
  color: var(--text);

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

export const BlogTitle = styled.h1`
  font-size: 2rem;
  color: var(--text);
  padding: 0.2rem 0;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

export const BlogSubtitle = styled.strong`
  font-size: 1.5rem;
  color: var(--text);
  padding: 0 0.2rem;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

export const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const BlogContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem 10rem;

  header {
    display: flex;
    flex-direction: column;
  }

  section {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
  }
`
export const LastUpdateIcon = styled(AiOutlineClockCircle)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`

export const BlogContentTitle = styled.h1`
  font-size: 3rem;
`

export const BlogContentSubTitle = styled.span`
  font-size: 2rem;
`

export const BlogHTMLContent = styled.div`
  padding: 2rem 0;

  p {
    padding: 1rem 0;
    width: 90%;
    font-size: 1.2rem;
  }

  h1 {
    margin-top: 1.4rem;
  }
`
