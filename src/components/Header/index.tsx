import React from 'react'
import styles from './header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>{`{ rubenskishimoto.dev }`}</h2>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li>01. <a>Perfil</a></li>
                    <li>02. <a>Projetos</a></li>
                    <li>03. <a>Contato</a></li>
                </ul>
                <button>Currículo</button>
            </nav>
        </header>
    )
}

