import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ProfileImg } from '../components/Profile/ProfileImg';
import { ProfileDescription } from '../components/Profile/ProfileDescription';
import { SocialMedia } from '../components/SideInfo/SocialMedia';
import { Email } from '../components/SideInfo/Email';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>{`rubskishimoto |  Home `}</title>

        <meta property="og:url" content="https://www.rubenskishimoto.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="{rubenskishimoto.dev}"
        />
        <meta
          property="og:description"
          content="Site Portfólio"
        />
        <meta property="og:image" content={"https://i.ibb.co/7nGWq71/portfolio-1.png"} />
      </Head>

      <Header />
      <main className={styles.container}>
        <SocialMedia />
        <section className={styles.profile}>
          <div className={styles.info}>
            <ProfileDescription />
            <ProfileImg />
          </div>
          <div className={styles.navigateOptions}>
            <Button route="/contact">Contato</Button>
            <Button route="/projects" color="gray">Projetos</Button>
          </div>
        </section>
        <Email />
      </main>
    </>
  )
}
