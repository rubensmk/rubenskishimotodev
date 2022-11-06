import styled from 'styled-components'
import { motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'
import { BiLink } from 'react-icons/bi'

export const Container = styled(motion.div)`
  background: rgba(42, 60, 71, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled(motion.div)`
  background: linear-gradient(
    225deg,
    var(--btn-background) 0%,
    var(--primary) 100%
  );
  width: 100vw;
  max-width: 70%;
  height: 820px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  text-align: center;
  position: relative;
  overflow: auto;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  section {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  @media (max-width: 1440px) {
    max-width: 1000px;
    height: 720px;
    padding: 1.5rem 2rem 0 2rem;

    header {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
      div {
        h1 {
          font-size: 1.5rem;
        }
      }
    }

    section {
      margin-top: 0.4rem;

      strong {
        margin-top: 0.4rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
    padding: 1.4rem 1.6rem 0 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    header {
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
      div {
        h1 {
          font-size: 1.5rem;
        }
      }
    }

    section {
      margin-top: 0.6rem;

      strong {
        margin-top: 0.2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`

export const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProjectName = styled(motion.h1)`
  font-weight: 600;
  color: var(--text);
`

export const CloseModal = styled(CgClose).attrs({
  size: 26,
  color: '#EBE7D9',
})`
  cursor: pointer;
`

export const Title = styled.strong`
  margin-top: 0.8rem;
  color: var(--text);
`

export const Description = styled.p`
  padding: 8px 16px;
`
export const Techs = styled.div`
  display: flex;
  padding: 8px 16px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
export const RepoList = styled(motion.div)`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--text);

  @media (max-width: 425px) {
    padding: 8px;
    flex-direction: column;
  }
`

export const RepoItem = styled(motion.a)`
  padding: 4px 24px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 425px) {
    align-self: flex-start;
  }
`

export const RepoIcon = styled(FaGithub)`
  width: 24px;
  height: 24px;
`
export const LinkIcon = styled(BiLink)`
  width: 24px;
  height: 24px;
`
export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
