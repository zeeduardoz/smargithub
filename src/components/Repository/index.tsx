/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'
import { Content, Repo, RepoItem, Name, Title, Desc, Lang, Star } from './style'
import { Modal } from './Modal/index'
import { GithubContext } from '../../context/GithubContext'

export function Repository() {
  const { repositories, getRepos } = useContext(GithubContext)

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()
  const user = query.get('user')

  useEffect(() => {
    getRepos(user!)
  })

  return (
    <Content>
      <Title>Repositórios ({repositories ? repositories.length : 0})</Title>
      {repositories && repositories.length >= 1 ? (
        repositories.map(repo => {
          return (
            <Repo key={repo.id}>
              <RepoItem>
                <Name>{repo.name}</Name>
                <Desc>
                  {repo.description ? repo.description : 'Sem descrição.'}
                </Desc>
              </RepoItem>
              <RepoItem>
                <Lang>{repo.language ? repo.language : 'Nenhuma'}</Lang>
              </RepoItem>
              <RepoItem>
                <Star>
                  <FaStar />
                  &nbsp; {repo.stargazers_count}
                </Star>
              </RepoItem>
              <RepoItem>
                <Modal repo={repo} />
              </RepoItem>
            </Repo>
          )
        })
      ) : (
        <>Nenhum repositório encontrado!</>
      )}
    </Content>
  )
}
