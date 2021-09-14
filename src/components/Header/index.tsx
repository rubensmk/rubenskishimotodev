import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { ActiveLink } from '../ActiveLink';
import { useRouter } from 'next/router';

export function Header() {
    const { asPath } = useRouter();

    const isHomePage = asPath === '/';

    return (
        <header className={styles.header}>
            <div className={styles.logo}>

                <div className={styles.logo}>
                    <Link href="/">
                        <a >
                            {`{ rubenskishimoto.dev }`}
                        </a>
                    </Link>
                    {isHomePage && (
                        <p>
                            Você já está na Home 😎
                        </p>
                    )}
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
                        <ActiveLink href="/contact" activeClassName={styles.active}>
                            <a>Contato</a>
                        </ActiveLink>
                    </li>
                </ul>
                <button>
                    <a href="https://drive.google.com/file/d/1HaYG8lPbcVAe5cP077R_aPsAyxh1YGOj/view" target="_blank" rel="noreferrer">
                        Currículo
                    </a>
                </button>
            </nav>
        </header>
    )
}

