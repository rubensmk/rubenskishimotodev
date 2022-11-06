import { Header } from '../../components/Header'
import React from 'react'
import * as S from './styles'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { client } from '../../services/prismic'
import { RichText } from 'prismic-dom'

export default function BlogContent({ blog }) {
  console.log(blog)
  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Blog `}</title>
      </Head>

      <Header />

      <S.BlogContent>
        <S.BlogTitle>{blog.title}</S.BlogTitle>
      </S.BlogContent>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const slug = props.params.slug

  const response = await client.getByUID('blog', String(slug))

  const blog = {
    id: response.id,
    slug: response.uid,
    title: RichText.asText(response.data.title),
    subtitle: RichText.asText(response.data.subtitle),
    thumbnail: response.data.thumbnail.thumb.url,
    last_update: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
    ),
    first_update: new Date(response.first_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
    ),
    content: RichText.asHtml(response.data.content),
  }

  return {
    props: {
      blog,
    },
  }
}
