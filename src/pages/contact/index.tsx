import { Header } from '../../components/Header';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/mailAnimation.json';
import styles from './contact.module.scss';
import { SiLinkedin, SiGmail, SiWhatsapp, SiInstagram } from 'react-icons/si';
import Head from 'next/head';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

export default function Contacts() {
    return (
        <>
            <Head>
                <title>{`rubskishimoto |  Contato `}</title>
            </Head>
            <Header />
            <main className={styles.container}>
                <div className={styles.image}>
                    <Lottie options={defaultOptions} />
                </div>
                <div className={styles.verticalLine} />
                <section className={styles.contact}>
                    <div className={styles.contactItem}>
                        <SiGmail size={32} />
                        <a href="mailto:rubenskishimoto@gmail.com">rubenskishimoto@gmail.com</a>
                    </div>
                    <div className={styles.contactItem}>
                        <SiLinkedin size={32} />
                        <a href="https://www.linkedin.com/in/rubens-kishimoto/" target="_blank" rel="noreferrer">in/rubens-kishimoto</a>
                    </div>
                    <div className={styles.contactItem}>
                        <SiWhatsapp size={32} />
                        <a>+55 (91) 99127-8611</a>
                    </div>
                    <div className={styles.contactItem}>
                        <SiInstagram size={32} />
                        <a href="https://www.instagram.com/rubens.mkishimoto/" target="_blank" rel="noreferrer" >@rubens.mkishimoto</a>
                    </div>
                </section>
            </main>

        </>
    )
}