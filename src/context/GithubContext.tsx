/* eslint-disable camelcase */
import { createContext, useState } from 'react'

import api from '../services/api'

type Repo = {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
  language: string
  disabled: boolean
  default_branch: string
  created_at: string
  updated_at: string
  pushed_at: string
}

type GitHub = {
  login: string
  id: number
  avatar_url: string
  url: string
  name: string
  company: string
  location: string
  bio: string
  twitter_username: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

type GithubCotextType = {
  github: GitHub
  repositories: Repo[]

  SearchGit: (data: string) => Promise<any>
  getRepos: (data: string) => Promise<any>
}

export const GithubContext = createContext({} as GithubCotextType)

export const GithubProvider: React.FC = ({ children }: any) => {
  const [github, setGithub] = useState<GitHub | any>(null)
  const [repositories, setRepositories] = useState<Repo[] | any>(null)

  async function SearchGit(data: string) {
    try {
      const response = await api.get(`/users/${data}`)
      if (response.status === 200) {
        setGithub(response.data)
      }
    } catch (err) {
      setGithub(null)
    }
  }

  async function getRepos(data: string) {
    try {
      const response = await api.get(`/users/${data}/repos`)
      if (response.status === 200) setRepositories(response.data)
    } catch (err) {
      setGithub(null)
    }
  }

  return (
    <GithubContext.Provider
      value={{
        github,
        repositories,
        SearchGit,
        getRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
