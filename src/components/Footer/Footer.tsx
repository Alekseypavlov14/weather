import { FC } from 'react'
import { Anchor } from '../Anchor/Anchor'
import { Container } from '../Container/Container'
import { Title } from '../Title/Title'
import styles from './Footer.module.css'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <Container>
        <Title className={styles.Title} />

        <div className={styles.Columns}>
          <div className={styles.Column}>
            <div className={styles.Headline}>
              API
            </div>
            <div className={styles.Rows}>
              <div className={styles.Row}>
                <Anchor
                  href='https://www.weatherapi.com/'
                >
                  https://www.weatherapi.com/
                </Anchor>
              </div>
            </div>
          </div>

          <div className={styles.Column}>
            <div className={styles.Headline}>
              Author
            </div>
            <div className={styles.Rows}>
              <div className={styles.Row}>
                Aleksey Pavlov
              </div>
              <div className={styles.Row}>
                <Anchor
                  href='mailto:aleshapavlov9@gmail.com'
                >
                  aleshapavlov9@gmail.com
                </Anchor>
              </div>
              <div className={styles.Row}>
                <Anchor
                  href='https://aleksey-pavlov.netlify.app'
                >
                  aleksey-pavlov.netlify.app
                </Anchor>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Copyright}>
          &copy; aleksey pavlov 2022
        </div>
      </Container>
    </div>
  )
}

export { Footer }