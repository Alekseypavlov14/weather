import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import styles from './Title.module.css'
import cn from 'classnames'

interface TitleProps {
  className?: string
}

const Title: FC<TitleProps> = ({ className }) => {
  return (
    <div className={cn(styles.Title, className)}>
      <FontAwesomeIcon 
        className={styles.Icon} 
        icon={faCloud} 
      />
      Weather to Travel
    </div>
  )
}

export { Title }