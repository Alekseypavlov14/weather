import { FC } from 'react'
import { IForecastDay } from '../../types/ForecastDay.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faWind } from '@fortawesome/free-solid-svg-icons'
import styles from './ForecastDay.module.css'

interface ForecastDayProps {
  day: IForecastDay
}

const ForecastDay: FC<ForecastDayProps> = ({ day }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = daysOfWeek[new Date(day.date).getDay()]

  return (
    <div className={styles.ForecastDay}>
      <div className={styles.Title}>
        {dayOfWeek}
      </div>

      <img
        className={styles.Image}
        src={day.day.condition.icon}
        alt=''
      />

      <div className={styles.Temperature}>
        {Math.ceil(day.day.avgtemp_c)}&deg;C
      </div>

      <div className={styles.RainProbability}>
        <FontAwesomeIcon icon={faCloudRain} />
        &nbsp;
        {day.day.daily_chance_of_rain}%
      </div>

      <div className={styles.AverageWindSpeed}>
        <FontAwesomeIcon icon={faWind} />
        &nbsp;
        {day.day.maxwind_kph}
        &nbsp;kph
      </div>
    </div>
  )
}

export { ForecastDay }