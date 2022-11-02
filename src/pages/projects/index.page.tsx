/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header'
import React, { useState } from 'react'
import * as S from './styles'
import { Modal } from '../../components/Modal'
import { IProject, ProjectCard } from '../../components/ProjectCard'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { client } from '../../services/prismic'
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useEffect } from 'react'
import { usePrismicDocumentsBySomeTags } from '@prismicio/react'
import { CubeSpinner } from 'react-spinners-kit'

export default function Projects({ projects, tags }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [allProjects, setAllProjects] = useState(projects)
  const [modalInfo, setModalInfo] = useState({} as IProject)
  const [documents, { state }] = usePrismicDocumentsBySomeTags(selectedTags)

  const handleOpenModal = (project: IProject) => {
    setModalInfo(project)
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleSelectTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      const existingTags = selectedTags.filter(
        (existingTag) => existingTag !== tag
      )
      setSelectedTags(existingTags)
    } else {
      setSelectedTags((prevState) => [...prevState, tag])
    }
  }

  useEffect(() => {
    if (selectedTags.length >= 1) {
      const filteredProjects = documents?.results.map((project) => {
        const techs = project.data.techs.map((tech) => {
          return {
            techIconUrl: tech?.tech_icon?.url,
            techName: RichText.asText(tech?.tech_name),
          }
        })

        const repos = project?.data?.repo_url?.map((repo) => {
          return {
            repoUrl: repo?.url?.url,
          }
        })

        const projectImages = project?.data?.project_images?.map((image) => {
          return image?.image?.url
        })

        const projectTags = project?.tags?.map((tag) => {
          return tag
        })

        return {
          id: project.uid,
          projectName: RichText.asText(project?.data?.project_name),
          thumbnail: project?.data?.thumbnail?.url,
          description: RichText.asText(project?.data?.description),
          techs,
          repos,
          projectImages,
          projectTags,
        }
      })

      setAllProjects(filteredProjects)
    } else {
      setAllProjects(projects)
    }
  }, [selectedTags, documents])

  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Projetos `}</title>
      </Head>

      <Header />
      <S.Content>
        <S.FilterContainer>
          {tags.map((tag: string) => (
            <S.FilterTag
              isSelected={selectedTags.includes(tag)}
              onClick={() => handleSelectTag(tag)}
              key={tag}
            >
              {tag}
            </S.FilterTag>
          ))}
        </S.FilterContainer>

        <S.Projects>
          {state === 'loading' ? (
            <S.Loading>
              <CubeSpinner backColor="#EBE7D9" frontColor="#b31317" />
            </S.Loading>
          ) : (
            <>
              {allProjects?.map((project: IProject) => (
                <ProjectCard
                  handleOpenModal={() => handleOpenModal(project)}
                  project={project}
                  key={project.id}
                />
              ))}
            </>
          )}
        </S.Projects>

        <S.OtherButton>Outros Projetos</S.OtherButton>

        {isOpenModal && (
          <Modal closeModal={handleCloseModal} modalInfo={modalInfo} />
        )}
      </S.Content>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await client.get({
    predicates: prismic.predicate.at('document.type', 'projects'),
  })
  const allTags = await client.getTags()

  const projects = allProjects.results.map((project) => {
    const techs = project.data.techs.map((tech) => {
      return {
        techIconUrl: tech?.tech_icon?.url,
        techName: RichText.asText(tech?.tech_name),
      }
    })

    const repos = project?.data?.repo_url?.map((repo) => {
      return {
        repoUrl: repo?.url?.url,
      }
    })

    const projectImages = project?.data?.project_images?.map((image) => {
      return image?.image?.url
    })

    const projectTags = project?.tags?.map((tag) => {
      return tag
    })

    return {
      id: project.uid,
      projectName: RichText.asText(project?.data?.project_name),
      thumbnail: project?.data?.thumbnail?.url,
      description: RichText.asText(project?.data?.description),
      techs,
      repos,
      projectImages,
      projectTags,
    }
  })

  const tags = allTags.map((tag) => {
    return tag
  })

  return {
    props: {
      projects,
      tags,
    },
    revalidate: 60 * 60 * 24, //24h
  }
}
