import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logo}>
          <Link href="/">
            <a>{`{ rubenskishimoto.dev }`}</a>
          </Link>
        </div>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>Perfil</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects" activeClassName={styles.active}>
              <a>Projetos</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/blog" activeClassName={styles.active}>
              <a>Blog</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contact" activeClassName={styles.active}>
              <a>Contato</a>
            </ActiveLink>
          </li>
        </ul>
        <button>
          <a
            href="https://drive.google.com/file/d/1QeOOVON96ygeMiELfTzj9JpeSZkT5DZ_/view"
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </a>
        </button>
      </nav>
    </header>
  )
}
