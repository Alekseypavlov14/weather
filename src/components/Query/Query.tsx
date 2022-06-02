import { FC, useState } from 'react'
import styles from './Query.module.css'

interface QueryProps {}

const Query: FC<QueryProps> = () => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.Query}>
      <input 
        type="text"
        className={styles.Input}
        value={value}
        placeholder='Choose the location'
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        className={styles.Button}
        onClick={() => {}}
      >
        Explore
      </button>
    </div>
  )
}

export { Query }