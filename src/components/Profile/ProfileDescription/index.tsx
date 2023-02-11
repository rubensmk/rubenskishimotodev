import * as S from './styles'
import { CodeBlock, obsidian } from 'react-code-blocks'

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
    "techs" : [ " ReactJS ", " React Native " , " Ruby on Rails " ," NextJS " , "Node.js" ], 
}
`

export function ProfileDescription() {
  return (
    <S.Container>
      <strong>Olá, meu nome é</strong>
      <h1>Rubens Mititaka Kishimoto</h1>
      <h2>Desenvolvedor Full-Stack</h2>
      <CodeBlock
        language="javascript"
        text={text}
        showLineNumbers={true}
        theme={obsidian}
        wrapLines={true}
        codeBlock
        customStyle={{
          height: '360px',
          width: '680px',
          borderRadius: '5px',
          backgroundColor: '#282A36',
          color: 'var(--text)',
        }}
      />
    </S.Container>
  )
}
