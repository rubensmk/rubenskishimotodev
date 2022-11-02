/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header';
import React, {  useState } from 'react';
import * as S from './styles';
import { Modal } from '../../components/Modal';
import { IProject, ProjectCard } from '../../components/ProjectCard';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { client } from '../../services/prismic';
import * as prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';


export default function Projects({ projects, tags }) {
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
        <S.Container>

            <Head>
                <title>{`rubskishimoto |  Projetos `}</title>
            </Head>

            <Header />
            <S.Content>
                <S.FilterContainer>
                {tags.map(tag => (
                    <S.FilterTag key={tag}>{tag}</S.FilterTag>
                ))}
                </S.FilterContainer>
                
                <S.Projects>
                    {
                    projects?.map(project => (
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
    const allProjects = await client.get({predicates: prismic.predicate.at('document.type', 'projects')});
    const allTags = await client.getTags();
    
    const projects = allProjects.results.map(project =>{
        const techs = project.data.techs.map(tech => {
            return {
                techIconUrl:tech?.tech_icon?.url,
                techName:RichText.asText(tech?.tech_name)
            }
        } );

        const repos = project?.data?.repo_url?.map(repo => {
            return {
                repoUrl:repo?.url?.url,
            }
        });

        const projectImages = project?.data?.project_images?.map(image =>{
            return image?.image?.url
            
        })

        return{
            id: project.uid,
            projectName: RichText.asText(project?.data?.project_name),
            thumbnail: project?.data?.thumbnail?.url,
            description: RichText.asText(project?.data?.description),
            techs,
            repos,
            projectImages,

        }
    });


    const tags = allTags.map(tag => {
        return tag
    });
    
    return {
        props: {
            projects,
            tags
        },
        revalidate: 60 * 60 * 24 //24h
    }

}