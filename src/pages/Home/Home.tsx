import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import { Query } from '../../components/Query/Query'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Container>
        <Query />
      </Container>
    </div>
  )
}

export { Home }