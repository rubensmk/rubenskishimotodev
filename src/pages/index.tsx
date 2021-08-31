import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ProfileImg } from '../components/Profile/ProfileImg';
import { ProfileDescription } from '../components/Profile/ProfileDescription';
import { SocialMedia } from '../components/SideInfo/SocialMedia';
import { Email } from '../components/SideInfo/Email';

import React from 'react';
import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <SocialMedia />
        <section className={styles.profile}>
          <div className={styles.info}>
            <ProfileDescription />
            <ProfileImg />
          </div>
          <div className={styles.navigateOptions}>
            <Button color="secondary" route="/contact">Contato</Button>
            <Button route="/projects">Projetos</Button>
          </div>
        </section>
        <Email />
      </main>
    </>
  )
}
