import { FC } from 'react'
import styles from './Anchor.module.css'
import cn from 'classnames'

interface AnchorProps {
  children: string,
  href: string,
  className?: string
}

const Anchor: FC<AnchorProps> = ({ 
  children, 
  href, 
  className 
}) => {
  return (
    <a 
      href={href}
      className={cn(styles.Anchor, className)}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

export { Anchor }