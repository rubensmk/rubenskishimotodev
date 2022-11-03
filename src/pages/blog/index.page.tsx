import { Header } from '../../components/Header'
import React from 'react'
import * as S from './styles'
import Head from 'next/head'

export default function Blog() {
  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Blog `}</title>
      </Head>

      <Header />

      <S.Content>
        {/* {blogs.map((blog) => (
          <S.BlogCard key={blog.title}>
            <S.BlogThumbnail src={blog.image} />
            <S.BlogInfo>
              <S.BlogDate>{blog.date}</S.BlogDate>
              <S.BlogTitle>{blog.title}</S.BlogTitle>
              <S.BlogSubtitle>{blog.subtitle}</S.BlogSubtitle>
            </S.BlogInfo>
          </S.BlogCard>
        ))} */}
      </S.Content>
    </S.Container>
  )
}
