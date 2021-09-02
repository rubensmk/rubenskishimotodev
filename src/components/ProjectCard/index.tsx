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
    project_title: string;
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
        <div className={styles.card} onClick={() => handleOpenModal(project)}>
            <h1>{project.project_title}</h1>
            <img src={project.thumbnail} alt="Project" className={styles.cardImage} />
        </div>
    )
}