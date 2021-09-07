import * as S from './styles'

export function ProfileDescription() {
    return (
        <S.Container>
            <strong>Olá, meu nome  é</strong>
            <h1>Rubens Mititaka Kishimoto</h1>
            <h2>Desenvolvedor Full-Stack</h2>
            <p>
                Formado em Engenharia de Computação pelo Centro Universitário do Estado do Pará (CESUPA),
                atuando atualmente como desenvolvedor front-end na <a>Luby Software</a> utilizando ferramentas
                como <strong>ReactJS, NextJS e React Native.</strong> Conhecimentos de backend utilizando frameworks Node.js como <strong>Express</strong> e <strong>AdonisJS</strong>,
                trabalhando em conjunto com integrações com bancos de dados e diferentes serviços.
            </p>
        </S.Container>
    )
}