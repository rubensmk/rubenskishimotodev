import styled from 'styled-components'
import { FiHome, FiBookOpen, FiFolder, FiMail } from 'react-icons/fi'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const ProfileIcon = styled(FiHome)`
  width: 22px;
  height: 22px;
`

export const ProjectsIcon = styled(FiFolder)`
  width: 22px;
  height: 22px;
`

export const BlogIcon = styled(FiBookOpen)`
  width: 22px;
  height: 22px;
`

export const ContactIcon = styled(FiMail)`
  width: 22px;
  height: 22px;
`
