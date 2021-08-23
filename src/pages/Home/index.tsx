import { Container } from './style'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import { Search } from '../../components/Search/index'
import { User } from '../../components/User/index'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <User />
      </Container>
      <Footer />
    </>
  )
}
