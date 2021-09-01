/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import styles from './projects.module.scss';
import { Modal } from '../../components/Modal';

export default function Projects() {
    const [isOpenModal, setIsOpenModal] = useState(false);


    const handleOpenModal = () => {
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section className={styles.content}>
                    <div className={styles.card} onClick={handleOpenModal}>
                        <h1>DS Deliver</h1>
                        <img src="/images/dsdeliver.png" alt="Project" className={styles.cardImage} />
                    </div>
                    <div className={styles.card} onClick={handleOpenModal}>
                        <h1>DS Deliver</h1>
                        <img src="/images/dsdeliver.png" alt="Project" className={styles.cardImage} />
                    </div>
                    <div className={styles.card} onClick={handleOpenModal}>
                        <h1>DS Deliver</h1>
                        <img src="/images/dsdeliver.png" alt="Project" className={styles.cardImage} />
                    </div>
                    <div className={styles.card} onClick={handleOpenModal}>
                        <h1>DS Deliver</h1>
                        <img src="/images/dsdeliver.png" alt="Project" className={styles.cardImage} />
                    </div>
                    <div className={styles.card} onClick={handleOpenModal}>
                        <h1>DS Deliver</h1>
                        <img src="/images/dsdeliver.png" alt="Project" className={styles.cardImage} />
                    </div>
                </section>
                <a href="https://github.com/rubensmk?tab=repositories" target="_blank" rel="noreferrer" className={styles.button}>
                    Outros projetos
                </a>
                {isOpenModal && <Modal closeModal={handleCloseModal} />}
            </main>

        </>
    )
}