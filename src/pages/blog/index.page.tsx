/* eslint-disable @next/next/link-passhref */
import { Header } from '../../components/Header'
import React from 'react'
import * as S from './styles'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { client } from '../../services/prismic'
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import Link from 'next/link'
interface IBlog {
  id: string
  slug: string
  title: string
  subtitle: string
  thumbnail: string
  last_update: string
  first_update: string
}

interface BlogsProps {
  blogs: IBlog[]
}

export default function Blog({ blogs }: BlogsProps) {
  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Blog `}</title>
      </Head>

      <Header />

      <S.Content>
        {blogs?.map((blog) => (
          <Link href={`blog/${blog.slug}`} key={blog?.title}>
            <S.BlogCard>
              <S.BlogThumbnail src={blog?.thumbnail} />
              <S.BlogInfo>
                <S.BlogDate>{blog?.last_update}</S.BlogDate>
                <S.BlogTitle>{blog?.title}</S.BlogTitle>
                <S.BlogSubtitle>{blog?.subtitle}</S.BlogSubtitle>
              </S.BlogInfo>
            </S.BlogCard>
          </Link>
        ))}
      </S.Content>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.get({
    predicates: prismic.predicate.at('document.type', 'blog'),
  })

  const blogs = response.results.map((blog) => {
    return {
      id: blog.id,
      slug: blog.uid,
      title: RichText.asText(blog.data.title),
      subtitle: RichText.asText(blog.data.subtitle),
      thumbnail: blog.data.thumbnail.thumb.url,
      last_update: new Date(blog.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }
      ),
      first_update: new Date(blog.first_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }
      ),
    }
  })

  return {
    props: {
      blogs,
    },
    revalidate: 60 * 60 * 24, //24h
  }
}
