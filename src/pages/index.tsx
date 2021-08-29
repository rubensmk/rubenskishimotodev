import { Header } from '../components/Header';
import Image from 'next/image';
import React from 'react';
import styles from './home.module.scss';
import { SiLinkedin, SiTwitter, SiInstagram, SiGithub } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <aside className={styles.social}>
          <div>
            <a href="https://github.com/rubensmk" target="_blank" rel="noreferrer">
              <SiGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/rubens-kishimoto/" target="_blank" rel="noreferrer">
              <SiLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com/rubens.mkishimoto/" target="_blank" rel="noreferrer">
              <SiInstagram size={32} />
            </a>
            <a href="https://twitter.com/kishimotomk" target="_blank" rel="noreferrer">
              <SiTwitter size={32} />
            </a>
          </div>
          <div className={styles.verticalLine} />
        </aside>

        <section className={styles.profile}>
          <div className={styles.description}>
            <strong>Olá, meu nome  é</strong>
            <h1>Rubens Mititaka Kishimoto</h1>
            <h2>Desenvolvedor Full-Stack</h2>
            <p>
              Formado em Engenharia de Computação pelo Centro Universitário do Estado do Pará (CESUPA),
              atuando atualmente como desenvolvedor front-end na <a>Luby Software</a> utilizando ferramentas
              como ReactJS, NextJS e React Native. Conhecimentos de backend utilizando frameworks Node.js como Express e AdonisJS,
              trabalhando em conjunto com integrações com bancos de dados e diferentes serviços.
            </p>
            <div className={styles.techs}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="52" height="52" alt="js-logo" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="52" height="52" alt="ts-logo" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="52" height="52" alt="react-logo" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width="52" height="52" alt="nextjs-logo" className={styles.nextlogo} />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="52" height="52" alt="express-logo" className={styles.logo} />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" width="52" height="52" alt="adonisjs-logo" />
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.frame} />
            <Image src="https://avatars.githubusercontent.com/u/52255226?v=4" width="224" height="244" alt="profile_image" className={styles.image} />
          </div>
        </section>
        <aside className={styles.email}>
          <p>
            rubenskishimoto@gmail.com
          </p>
          <div className={styles.verticalLine} />
        </aside>
      </main>
    </>
  )
}
