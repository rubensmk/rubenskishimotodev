/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import * as S from './styles'
import { TechBadge } from '../TechBadge'
import { Slider } from './Slider/Slider'
import { RichText } from 'prismic-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import { useState } from 'react'

interface ModalProps {
  closeModal: () => void
  modalInfo: string
}

export function Modal({ closeModal, modalInfo }: ModalProps) {
  const [project, { state }] = usePrismicDocumentByUID('projects', modalInfo)
  const [projectInfo, setProjectInfo] = useState(null)

  const cardAnimation = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  }

  const bgAnimation = {
    visible: { opacity: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (state === 'loaded') {
      const techs = project.data.techs.map((tech) => {
        return {
          techIconUrl: tech?.tech_icon?.url,
          techName: RichText.asText(tech?.tech_name),
        }
      })

      const projectImages = project?.data?.project_images?.map((image) => {
        return image.image.url
      })

      const repos = project?.data?.repo_url?.map((repo) => {
        return {
          repoUrl: repo?.url?.url,
        }
      })

      setProjectInfo({
        name: RichText.asText(project.data.project_name),
        description: RichText.asText(project?.data?.description),
        techs,
        projectImages,
        repos,
      })
    }
  }, [
    project?.data?.description,
    project?.data?.project_images,
    project?.data.project_name,
    project?.data?.repo_url,
    project?.data?.techs,
    state,
  ])

  return (
    <S.Container initial="hidden" animate="visible" variants={bgAnimation}>
      <S.Content initial="hidden" animate="visible" variants={cardAnimation}>
        <S.Header>
          <div>
            <S.ProjectName>{projectInfo?.name}</S.ProjectName>
          </div>
          <S.CloseModal onClick={closeModal} />
        </S.Header>
        <section>
          <S.Title>Descrição</S.Title>
          <S.Description>{projectInfo?.description}</S.Description>

          <S.Title>Ferramentas</S.Title>
          <S.Techs>
            {projectInfo?.techs?.map((tech) => (
              <TechBadge key={tech?.techName} data={tech} />
            ))}
          </S.Techs>

          <S.Title>Repositórios</S.Title>
          <S.RepoList>
            {projectInfo?.repos.map((repo) => (
              <S.RepoItem
                key={repo.repoUrl}
                href={repo.repoUrl}
                target="_blank"
              >
                {repo.repoUrl.includes('rubensmk') ? (
                  <S.RepoIcon />
                ) : (
                  <S.LinkIcon />
                )}
                <strong>
                  {repo.repoUrl.split('rubensmk')[1] || repo.repoUrl}
                </strong>
              </S.RepoItem>
            ))}
          </S.RepoList>
        </section>
        <Slider images={projectInfo?.projectImages} />
      </S.Content>
    </S.Container>
  )
}
