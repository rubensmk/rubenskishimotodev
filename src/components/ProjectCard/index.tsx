/* eslint-disable @next/next/no-img-element */

import styles from './projectcard.module.scss';

export type ITech = {
    name: string;
    color: string;
    text_color: string;
    icon: string;
}

export type IProject = {
    id: number;
    title: string;
    description: string;
    repo_url: string[];
    techs: ITech[];
    thumbnail: string;
    images: string[];
}

interface ProjectCardProps {
    handleOpenModal: (project: IProject) => void;
    project: IProject;
}

export function ProjectCard({ handleOpenModal, project }: ProjectCardProps) {
    return (
        <div key={styles.id} className={styles.card} onClick={() => handleOpenModal(project)}>
            <h1>{project.title}</h1>
            <img src={project.thumbnail} alt="Project" className={styles.cardImage} />
        </div>
    )
}