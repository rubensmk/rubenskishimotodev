/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type ITech = {
  techName: string
  techIconUrl: string
}

export type IRepo = {
  repoUrl: string
}

export type IProjectImage = {
  projectImageUrl: string
}

export type IProject = {
  id: string
  projectName: string
  thumbnail: string
  description: string
  techs: ITech[]
  repos: IRepo[]
  projectImages: IProjectImage[]
  projectTags: string[]
}

interface ProjectCardProps {
  handleOpenModal: (project: IProject) => void
  project: IProject
}

export function ProjectCard({ handleOpenModal, project }: ProjectCardProps) {
  return (
    <S.Card key={project.id} onClick={() => handleOpenModal(project)}>
      <S.Folder />
      <S.CardTitle>{project?.projectName}</S.CardTitle>
    </S.Card>
  )
}
