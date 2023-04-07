import styles from './SessionTimer.module.css'
import { useSelector } from 'react-redux'

function SessionTimer() {
  const sessionLengthValue = useSelector(state => state.timer.sessionLength)
  
  return (
    <div className={styles.timer} id='time-left'>
      <p className={styles.title}>Session</p>
      <p className={styles.time}>{`${sessionLengthValue}:00`}</p>
    </div>
  )
}

export default SessionTimer