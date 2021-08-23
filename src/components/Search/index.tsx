import { useContext } from 'react'

import { Title, Content, SearchBar } from './style'
import { GithubContext } from '../../context/GithubContext'

export function Search() {
  const { SearchGit } = useContext(GithubContext)

  return (
    <Content>
      <Title>Buscar usuário...</Title>
      <SearchBar
        onChange={e => SearchGit(e.target.value)}
        placeholder="Digite o nome do usuário"
        aria-label="search-input"
      />
    </Content>
  )
}
