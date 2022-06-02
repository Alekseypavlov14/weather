import { FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDays } from '../../features/forecast/forecastSlice'
import { query } from './../../business/Query/Query'
import styles from './Query.module.css'

interface QueryProps {}

const Query: FC<QueryProps> = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const InputRef = useRef<HTMLInputElement>(null)

  function request() {
    InputRef.current?.blur()

    query.getWeatherByCity(value)
      .then(data => dispatch(setDays(data)))
  }

  return (
    <div className={styles.Query}>
      <input 
        type="text"
        className={styles.Input}
        value={value}
        placeholder='Choose the location'
        ref={InputRef}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') request()
        }}
      />

      <button
        className={styles.Button}
        onClick={request}
      >
        Explore
      </button>
    </div>
  )
}

export { Query }