import { useContext } from 'react'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'

import { Nav, Title, User, Container, End } from './style'
import { AuthContext } from '../../context/AuthContext'

export function Header() {
  const { useUser, signOut } = useContext(AuthContext)

  return (
    <Nav>
      <Container>
        <Title>SmarGithub</Title>
        <End>
          <User>
            <FaUser />
            <p>Olá, {useUser}!</p>
          </User>
          <button type="button" onClick={() => signOut()}>
            <FaSignOutAlt />
          </button>
        </End>
      </Container>
    </Nav>
  )
}
