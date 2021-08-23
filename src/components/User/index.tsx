import { useContext } from 'react'

import { Box, Content, Avatar, Name, Flex, FlexItem } from './style'
import {
  BoxPulse,
  ContentPulse,
  AvatarPulse,
  NamePulse,
  FlexPulse,
  FlexItemPulse
} from './loading'
import { GithubContext } from '../../context/GithubContext'

export function User() {
  const { github } = useContext(GithubContext)

  return github ? (
    <Box>
      <Content>
        <Avatar src={github.avatar_url} alt="Avatar" />
        <Name>{github.name}</Name>
      </Content>

      <Content>
        <p>
          <b>Localidade:</b> {github.location ? github.location : 'Nenhuma.'}
        </p>
        <p>
          <b>Empresa:</b> {github.company ? github.company : 'Nenhuma.'}
        </p>
        <p>
          <b>Twitter:</b>{' '}
          {github.twitter_username ? github.twitter_username : 'Nenhum.'}
        </p>
      </Content>

      <Flex>
        <FlexItem>
          <b>{github.public_repos}</b>
          <p>Repositórios</p>
        </FlexItem>
        <FlexItem>
          <b>{github.followers}</b>
          <p>Seguidores</p>
        </FlexItem>
        <FlexItem>
          <b>{github.following}</b>
          <p>Seguindo</p>
        </FlexItem>
      </Flex>

      <Content>
        <a href={`/smargithub?user=${github.login}`}>Repositórios</a>
      </Content>
    </Box>
  ) : (
    <BoxPulse>
      <ContentPulse>
        <AvatarPulse />
        <NamePulse />
      </ContentPulse>

      <ContentPulse>
        <span />
        <span />
        <span />
      </ContentPulse>

      <FlexPulse>
        <FlexItemPulse>
          <span />
        </FlexItemPulse>
        <FlexItemPulse>
          <span />
        </FlexItemPulse>
        <FlexItemPulse>
          <span />
        </FlexItemPulse>
      </FlexPulse>

      <ContentPulse>
        <span id="button" />
      </ContentPulse>
    </BoxPulse>
  )
}
