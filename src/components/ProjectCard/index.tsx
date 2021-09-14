/* eslint-disable @next/next/no-img-element */
import * as S from './styles';


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
        <S.Card key={project.id} onClick={() => handleOpenModal(project)}>
            <S.CardTitle>{project.title}</S.CardTitle>
            <S.CardImage src={project.thumbnail} alt="Project" />
        </S.Card>
    )
}