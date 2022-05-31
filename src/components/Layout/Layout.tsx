import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        <Header />
      </div>

      <div className={styles.Main}>
        <Outlet />
      </div>

      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  )
}

export { Layout }