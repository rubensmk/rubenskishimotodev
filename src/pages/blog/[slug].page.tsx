/* eslint-disable @next/next/link-passhref */
import { Header } from '../../components/Header'
import React from 'react'
import * as S from './styles'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { client } from '../../services/prismic'
import { RichText } from 'prismic-dom'
import Link from 'next/link'

export default function BlogContent({ blog }) {
  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Blog `}</title>
      </Head>

      <Header />

      <S.BlogContent>
        <Link href="/blog">
          <S.goBack>
            <S.goBackButton />
            <p>Voltar</p>
          </S.goBack>
        </Link>
        <header>
          <S.BlogContentTitle>{blog.title}</S.BlogContentTitle>
          <S.BlogContentSubTitle>{blog.subtitle}</S.BlogContentSubTitle>
          <section>
            <S.LastUpdateIcon />
            <span>{blog.last_update}</span>
          </section>
        </header>
        <S.BlogHTMLContent dangerouslySetInnerHTML={{ __html: blog.content }} />
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
