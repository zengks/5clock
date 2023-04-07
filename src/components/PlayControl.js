import styles from './PlayControl.module.css'
import { resetTimer } from '../features/timer/timerSlice'
import { useDispatch } from 'react-redux'

function PlayControl() {
  const dispatch = useDispatch()
  return (
    <div className={styles.playControls}>
      <button className={styles.playBtn}><i class="fa-solid fa-play"></i></button>
      <button className={styles.pauseBtn}><i class="fa-solid fa-pause"></i></button>
      <button className={styles.refreshBtn} onClick={() => dispatch(resetTimer())}><i class="fa-solid fa-arrows-rotate"></i></button>
    </div>
  )
}

export default PlayControl