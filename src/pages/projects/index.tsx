/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header';
import React, { useEffect, useState } from 'react';
import * as S from '../../styles/pages/projectsStyles';
import { Modal } from '../../components/Modal';
import { IProject, ProjectCard } from '../../components/ProjectCard';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getProjects } from '../../services/api';

export default function Projects() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({} as IProject);
    const [allProjects, setAllProjects] = useState<IProject[]>([]);


    const handleOpenModal = (project: IProject) => {
        setModalInfo(project);
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    useEffect(() => {
        async function fetchProjects() {
            const data = await getProjects();
            setAllProjects(data); 
        }

        fetchProjects();
    }, []);

    return (
        <S.Container>

            <Head>
                <title>{`rubskishimoto |  Projetos `}</title>
            </Head>

            <Header />
            <S.Content>
                <S.Projects>
                    {
                    allProjects.map(project => (
                        <ProjectCard handleOpenModal={() => handleOpenModal(project)} project={project} key={project.id} />
                    ))}
                </S.Projects>
                <S.OtherButton>
                    Outros Projetos
                </S.OtherButton>
                {isOpenModal && <Modal closeModal={handleCloseModal} modalInfo={modalInfo} />}
            </S.Content>
        </S.Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allProjects = await getProjects();

    return {
        props: {
            allProjects
        },
        revalidate: 60//24h
    }

}