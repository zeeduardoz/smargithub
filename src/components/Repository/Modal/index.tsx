/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */

import { useState } from 'react'

import {
  ModalForeground,
  ModalContent,
  Title,
  Desc,
  Line,
  Open,
  Close
} from './style'

import { getMonth } from '../../../services/dateUtils'

export function Modal(props: any) {
  const { repo } = props
  const [open, setModal] = useState(false)

  return (
    <>
      <Open type="button" onClick={() => setModal(true)}>
        Ver Mais
      </Open>
      {open ? (
        <ModalForeground>
          <ModalContent>
            <Title>{repo.name}</Title>
            <Desc>{repo.description}</Desc>
            <Line />
            <Desc>
              <b>Nome completo:</b> {repo.full_name}
            </Desc>
            <Desc>
              <b>Linguagem principal:</b> {repo.language}
            </Desc>
            <Desc>
              <b>Privado:</b> {repo.private ? 'Sim' : 'Não'}
            </Desc>
            <Desc>
              <b>Branch principal:</b> {repo.default_branch}
            </Desc>
            <Desc>
              <b>Observadores:</b> {repo.watchers_count}
            </Desc>
            <Desc>
              <b>Estrelas:</b> {repo.stargazers_count}
            </Desc>
            <Desc>
              <b>Forks:</b> {repo.forks_count}
            </Desc>
            <Desc>
              <b>Issues:</b> {repo.open_issues_count}
            </Desc>
            <Line />
            <Desc>
              <b>Criado em:</b>{' '}
              {`${new Date(repo.created_at).getDate()} de ${getMonth(
                new Date(repo.created_at).getMonth() + 1
              )} de ${new Date(repo.created_at).getFullYear()} às ${new Date(
                repo.created_at
              ).getHours()}:${
                new Date(repo.created_at).getMinutes() < 9
                  ? `0${new Date(repo.created_at).getMinutes()}`
                  : new Date(repo.created_at).getMinutes()
              }`}
            </Desc>
            <Desc>
              <b>Atualizado em:</b>
              {`${new Date(repo.updated_at).getDate()} de ${getMonth(
                new Date(repo.updated_at).getMonth() + 1
              )} de ${new Date(repo.updated_at).getFullYear()} às ${new Date(
                repo.updated_at
              ).getHours()}:${
                new Date(repo.updated_at).getMinutes() < 9
                  ? `0${new Date(repo.updated_at).getMinutes()}`
                  : new Date(repo.updated_at).getMinutes()
              }`}
            </Desc>
            <Desc>
              <b>Último Push:</b>
              {`${new Date(repo.pushed_at).getDate()} de ${getMonth(
                new Date(repo.pushed_at).getMonth() + 1
              )} de ${new Date(repo.pushed_at).getFullYear()} às ${new Date(
                repo.pushed_at
              ).getHours()}:${
                new Date(repo.pushed_at).getMinutes() < 9
                  ? `0${new Date(repo.pushed_at).getMinutes()}`
                  : new Date(repo.pushed_at).getMinutes()
              }`}
            </Desc>
            <Close type="button" onClick={() => setModal(false)}>
              Fechar
            </Close>
          </ModalContent>
        </ModalForeground>
      ) : (
        <></>
      )}
    </>
  )
}
