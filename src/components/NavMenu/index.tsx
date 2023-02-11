import React from 'react'
import * as S from './styles'
import { Button } from '../Button'

const NavMenu = () => {
  return (
    <S.Container>
      <Button route="/" color="gray">
        <S.MenuItemContainer>
          <S.ProfileIcon />
          <span>Perfil</span>
        </S.MenuItemContainer>
      </Button>
      <Button route="/projects" color="gray">
        <S.MenuItemContainer>
          <S.ProjectsIcon />
          <span>Projetos</span>
        </S.MenuItemContainer>
      </Button>
      <Button route="/blog" color="gray">
        <S.MenuItemContainer>
          <S.BlogIcon />
          <span>Blog</span>
        </S.MenuItemContainer>
      </Button>
      <Button route="/contact" color="gray">
        <S.MenuItemContainer>
          <S.ContactIcon />
          <span>Contato</span>
        </S.MenuItemContainer>
      </Button>
    </S.Container>
  )
}

export default NavMenu
