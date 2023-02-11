import React, { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
  children: ReactNode
  color?: 'gray'
  route: string
}

export function Button({ children, color, route }: ButtonProps) {
  return (
    <S.Container href={route} passHref>
      <S.Content color={color}>{children}</S.Content>
    </S.Container>
  )
}
