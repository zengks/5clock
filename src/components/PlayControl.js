import styles from './PlayControl.module.css'
import { resetTimer, startAndStop } from '../features/timer/timerSlice'
import { useDispatch } from 'react-redux'

function PlayControl() {
  const dispatch = useDispatch()
  return (
    <div className={styles.playControls} >
      <button id='start_stop' className={styles.playBtn} onClick={() => dispatch(startAndStop())}>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-pause"></i>
      </button>
      <button id='reset' className={styles.refreshBtn} onClick={() => dispatch(resetTimer())}><i class="fa-solid fa-arrows-rotate"></i></button>
    </div>
  )
}

export default PlayControl