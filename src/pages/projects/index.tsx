/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header';
import React, { useState } from 'react';
import styles from './projects.module.scss';
import { Modal } from '../../components/Modal';
import { IProject, ProjectCard } from '../../components/ProjectCard';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getProjects } from '../../services/api';

export default function Projects({ allProjects }) {
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
                    {allProjects.map(project => (
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

export const getStaticProps: GetStaticProps = async () => {
    const allProjects = await getProjects();

    return {
        props: {
            allProjects
        }
        // revalidate: 60 * 60 * 24 //24h
    }

}