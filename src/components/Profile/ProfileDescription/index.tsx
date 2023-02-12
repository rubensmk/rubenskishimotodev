import { useWindowSize } from '../../../hooks/useWindowSize'
import * as S from './styles'

const text = `
{
    "developer": {
        "name": "Rubens Mititaka Kishimoto",
        "email": "rubenskishimoto@gmail.com",
        "frontend": true,
        "backend": true,
        "most_used_languages": [ "javascript" , "ruby" ],
    },
    "degree": "Engenharia de Computação",
    "techs" : [
      " ReactJS ",
      " React Native " , 
      " Ruby on Rails " ,
      " NextJS " , 
      "Node.js"
    ], 
}
`

export function ProfileDescription() {
  const { width } = useWindowSize()

  return (
    <S.Container>
      <strong>Olá, meu nome é</strong>
      <h1>Rubens Mititaka Kishimoto</h1>
      <h2>Desenvolvedor Full-Stack</h2>
      {width >= 478 ? (
        <S.CodeBlockDescription
          text={text}
          customStyle={{
            borderRadius: '5px',
            backgroundColor: '#282A36',
            color: 'var(--text)',
            fontSize: '14px',
          }}
        />
      ) : (
        <>
          {width >= 375 ? (
            <S.CodeBlockDescription
              text={text}
              customStyle={{
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#282A36',
                color: 'var(--text)',
                fontSize: '10px',
              }}
            />
          ) : (
            <S.CodeBlockDescription
              text={text}
              customStyle={{
                width: '100%',
                borderRadius: '5px',
                backgroundColor: '#282A36',
                color: 'var(--text)',
                fontSize: '9px',
              }}
            />
          )}
        </>
      )}
    </S.Container>
  )
}
