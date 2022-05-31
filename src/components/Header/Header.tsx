import { FC } from 'react'
import { Container } from '../Container/Container'
import { Title } from '../Title/Title'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <Title />
      </Container>
    </div>
  )
}

export { Header }