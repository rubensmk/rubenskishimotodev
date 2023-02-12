import React, { useState } from 'react'
import * as S from './styles'
import { Button } from '../Button'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { asPath } = useRouter()

  return (
    <S.Container>
      <S.Content>
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
      </S.Content>
      <S.MobileContent>
        <S.SideMenuIcon onClick={() => setIsMenuOpen((state) => !state)} />
        {isMenuOpen && (
          <S.MenuNavigation>
            <S.CloseContainerIcon>
              <S.CloseIcon onClick={() => setIsMenuOpen(false)} />
            </S.CloseContainerIcon>

            <S.MenuItem asPath={asPath === '/'}>
              <Link href="/" passHref>
                <S.MenuOptionTitle>Perfil</S.MenuOptionTitle>
              </Link>
            </S.MenuItem>
            <S.MenuItem asPath={asPath === '/projects'}>
              <Link href="/projects" passHref>
                <S.MenuOptionTitle>Projetos</S.MenuOptionTitle>
              </Link>
            </S.MenuItem>
            <S.MenuItem asPath={asPath === '/blog'}>
              <Link href="/blog" passHref>
                <S.MenuOptionTitle>Blog</S.MenuOptionTitle>
              </Link>
            </S.MenuItem>
            <S.MenuItem asPath={asPath === '/contact'}>
              <Link href="/contact" passHref>
                <S.MenuOptionTitle>Contato</S.MenuOptionTitle>
              </Link>
            </S.MenuItem>
          </S.MenuNavigation>
        )}
      </S.MobileContent>
    </S.Container>
  )
}

export default NavMenu
