import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import NavMenu from '../NavMenu'

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
        <NavMenu />
      </nav>
    </header>
  )
}
