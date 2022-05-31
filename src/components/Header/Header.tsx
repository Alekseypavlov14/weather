import { FC } from 'react'
import { Container } from '../Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.Title}>
          <FontAwesomeIcon 
            className={styles.Icon} 
            icon={faCloud} 
          />
          <span className={styles.Text}>Weather to Travel</span>
        </div>
      </Container>
    </div>
  )
}

export { Header }