import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'

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
  width: 100%;
  height: 12rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  padding: 1rem;

  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }

  @media (max-width: 425px) {
    height: 10rem;
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

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 425px) {
    padding: 1rem 2rem;
  }
`
export const LastUpdateIcon = styled(AiOutlineClockCircle)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`

export const BlogContentTitle = styled.h1`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`

export const BlogContentSubTitle = styled.span`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

export const BlogHTMLContent = styled.div`
  padding: 2rem 0;

  p {
    padding: 0.5rem 0;
    width: 80%;
    font-size: 1.2rem;
  }

  h1 {
    margin-top: 1rem;
  }

  ul {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 1.5rem;
  }

  img {
    width: 80%;
    height: 80%;
  }

  pre {
    background-color: #1d2230;
    font-size: 1rem;
    padding: 1rem;
    align-items: center;
    border-radius: 0.5rem;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 100%;
    }

    h1 {
      margin-top: 1rem;
      font-size: 1.2rem;
    }

    p {
      padding: 0.5rem 0;
      width: 90%;
      font-size: 1rem;
    }

    ul {
      font-size: 1.2rem;
    }
  }
`
export const goBack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  padding: 2rem 0;
  cursor: pointer;
`

export const goBackButton = styled(FiArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;
`
