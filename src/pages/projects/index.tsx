/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import styles from './projects.module.scss';
import { Modal } from '../../components/Modal';
import { IProject, ProjectCard } from '../../components/ProjectCard';
import { projects } from '../../components/ProjectCard/projects';
import Head from 'next/head';

export default function Projects() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({} as IProject);


    const handleOpenModal = (project: IProject) => {
        setModalInfo(project);
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    return (
        <>
            <Head>
                <title>{`rubskishimoto |  Projetos `}</title>
            </Head>
            <Header />
            <main className={styles.container}>
                <section className={styles.content}>
                    {projects.map(project => (
                        <ProjectCard handleOpenModal={() => handleOpenModal(project)} project={project} key={project.id} />
                    ))}
                </section>
                <a href="https://github.com/rubensmk?tab=repositories" target="_blank" rel="noreferrer" className={styles.button}>
                    Outros projetos
                </a>
                {isOpenModal && <Modal closeModal={handleCloseModal} modalInfo={modalInfo} />}
            </main>

        </>
    )
}