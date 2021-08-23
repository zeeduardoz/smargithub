import { Container } from './style'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { Repository } from '../../components/Repository'

export default function Repositories() {
  return (
    <>
      <Header />
      <Container>
        <Repository />
      </Container>
      <Footer />
    </>
  )
}
