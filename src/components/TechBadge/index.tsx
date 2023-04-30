/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { ITech } from '../ProjectCard'
import { Container } from './styles'

interface TechBadgeProps {
  data: ITech
}

const techBadgeColor = {
  ReactJS: ['#F7F6F2', '#48CEF6'],
  'React Native': ['#212121', '#f5f5f5'],
  'Ruby on Rails': ['#FFFFFF', '#D40504'],
  Electron: ['#212121', '#f5f5f5'],
  NodeJS: ['#3d3d3d', '#FFFFFF'],
  Docker: ['#49F7A3', '#423F3E'],
  PostgreSQL: ['#243036', '#48CEF6'],
  Springboot: ['#49F7A3', '#423F3E'],
  Java: ['#f5f5f5', '#EC5F5F'],
  NextJS: ['#f5f5f5', '#111111'],
  ChakraUI: ['#3BC7BD', '#FFFFFF'],
  Sass: ['#F7F6F2', '#CB6699'],
  TailwindCSS: ['#F7F6F2', '#3BC7BD'],
  Typescript: ['#007ACC', '#F7F6F2'],
  CSS: ['#1572B6', '#F7F6F2'],
  HTML: ['#E44D26', '#F7F6F2'],
}

export function TechBadge({ data }: TechBadgeProps) {
  return (
    <Container
      color={techBadgeColor[data?.techName][0]}
      text_color={techBadgeColor[data?.techName][1]}
    >
      <Image src={data?.techIconUrl} width="28" height="28" alt="tech" />
      <p>{data?.techName}</p>
    </Container>
  )
}
