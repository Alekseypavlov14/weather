import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Container } from '../../components/Container/Container'
import { ForecastDay } from '../../components/ForecastDay/ForecastDay'
import { Query } from '../../components/Query/Query'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const days = useSelector((state: RootState) => state.forecast.days)

  return (
    <div className={styles.Home}>
      <Container>
        <Query />

        <div className={styles.ForecastResult}>
          {days.map((day, index) => (
            <ForecastDay day={day} key={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export { Home }