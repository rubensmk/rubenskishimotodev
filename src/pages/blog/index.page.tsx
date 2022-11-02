import { Header } from '../../components/Header'
import React from 'react'
import * as S from './styles'
import Head from 'next/head'

export default function Contacts() {
  return (
    <S.Container>
      <Head>
        <title>{`rubskishimoto |  Blog `}</title>
      </Head>

      <Header />

      <S.Content>
        <p>Em breve...</p>
      </S.Content>
    </S.Container>
  )
}
