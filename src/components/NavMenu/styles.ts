import styled from 'styled-components'
import { FiHome, FiBookOpen, FiFolder, FiMail } from 'react-icons/fi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

interface MenuItemProps {
  asPath: boolean
}

export const Container = styled.main``

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 1084px) {
    display: none;
  }
`

export const MobileContent = styled.div`
  display: none;

  @media (max-width: 1084px) {
    display: block;
  }
`

export const MenuNavigation = styled.div`
  background-color: var(--primary);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  gap: 48px;
`

export const MenuItem = styled.div<MenuItemProps>`
  display: ${({ asPath }) => (asPath ? 'none' : 'block')};
`

export const MenuOptionTitle = styled.a`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }
`

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: 1228px) {
    span {
      font-size: 14px;
    }
  }
`

export const ProfileIcon = styled(FiHome)`
  width: 22px;
  height: 22px;

  @media (max-width: 1228px) {
    width: 16px;
    height: 16px;
  }
`

export const ProjectsIcon = styled(FiFolder)`
  width: 22px;
  height: 22px;

  @media (max-width: 1228px) {
    width: 16px;
    height: 16px;
  }
`

export const BlogIcon = styled(FiBookOpen)`
  width: 22px;
  height: 22px;

  @media (max-width: 1228px) {
    width: 16px;
    height: 16px;
  }
`

export const ContactIcon = styled(FiMail)`
  width: 22px;
  height: 22px;

  @media (max-width: 1228px) {
    width: 16px;
    height: 16px;
  }
`

export const SideMenuIcon = styled(HiOutlineMenuAlt3)`
  cursor: pointer;
  width: 28px;
  height: 28px;
`

export const CloseContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  position: absolute;
  top: 10px;
`

export const CloseIcon = styled(MdClose)`
  width: 32px;
  height: 32px;
`
