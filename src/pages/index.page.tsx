import { Header } from '../components/Header'
import { ProfileImg } from '../components/Profile/ProfileImg'
import { ProfileDescription } from '../components/Profile/ProfileDescription'
import { SocialMedia } from '../components/SideInfo/SocialMedia'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/home.module.scss'
import { Button } from '../components/Button'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`rubskishimoto |  Home `}</title>

        <meta property="og:url" content="https://www.rubenskishimoto.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="{rubenskishimoto.dev}" />
        <meta
          property="og:description"
          content="Rubens Mititaka Kishimoto Dev"
        />
        <meta
          property="og:image"
          content={'https://i.ibb.co/7nGWq71/portfolio-1.png'}
        />
      </Head>

      <Header />
      <main className={styles.container}>
        <SocialMedia />
        <section className={styles.profile}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <ProfileImg />
              <Button route="https://drive.google.com/file/d/1QeOOVON96ygeMiELfTzj9JpeSZkT5DZ_/view">
                <div className={styles.resumeButton}>
                  <FiDownload />
                  <span>Currículo</span>
                </div>
              </Button>
            </div>
            <ProfileDescription />
          </div>
        </section>
      </main>
    </>
  )
}
