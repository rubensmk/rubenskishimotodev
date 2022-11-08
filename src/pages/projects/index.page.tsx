/* eslint-disable @next/next/no-img-element */
import { Header } from '../../components/Header'
import React, { useState } from 'react'
import * as S from './styles'
import { Modal } from '../../components/Modal'
import { IProject, ProjectCard } from '../../components/ProjectCard'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { client } from '../../services/prismic'
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { useEffect } from 'react'
import { CubeSpinner } from 'react-spinners-kit'
import { FaHashtag } from 'react-icons/fa'

export default function Projects({ projects, tags }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTags, setSelectedTags] = useState([])
  const [allProjects, setAllProjects] = useState(projects)
  const [modalInfo, setModalInfo] = useState(null)

  const handleOpenModal = (projectID: string) => {
    setModalInfo(projectID)
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
    async function getFilteredProjects() {
      setIsLoading(true)
      try {
        const response = await client.getAllByEveryTag(selectedTags)
        const filteredProjects = response.map((project) => {
          return {
            id: project.uid,
            projectName: RichText.asText(project?.data?.project_name),
          }
        })
        setAllProjects(filteredProjects)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (selectedTags.length >= 1) {
      getFilteredProjects()
    } else {
      setAllProjects(projects)
    }
  }, [projects, selectedTags])

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
              <FaHashtag />
              {tag}
            </S.FilterTag>
          ))}
        </S.FilterContainer>

        <S.FilterResults>{`Resultados da busca: ${
          !allProjects ? '...' : allProjects?.length
        }`}</S.FilterResults>

        <S.Projects>
          {isLoading ? (
            <S.Loading>
              <CubeSpinner backColor="#EBE7D9" frontColor="#b31317" />
            </S.Loading>
          ) : (
            <>
              {allProjects?.map((project: IProject) => (
                <ProjectCard
                  handleOpenModal={() => handleOpenModal(project.id)}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const allProjects = await client.get({
    predicates: prismic.predicate.at('document.type', 'projects'),
  })
  const allTags = await client.getTags()

  const projects = allProjects.results.map((project) => {
    return {
      id: project.uid,
      projectName: RichText.asText(project?.data?.project_name),
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
  }
}
