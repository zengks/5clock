import styles from './PlayControl.module.css'

function PlayControl() {
  return (
    <div className={styles.playControls}>
      <button className={styles.playBtn}><i class="fa-solid fa-play"></i></button>
      <button className={styles.pauseBtn}><i class="fa-solid fa-pause"></i></button>
      <button className={styles.refreshBtn}><i class="fa-solid fa-arrows-rotate"></i></button>
    </div>
  )
}

export default PlayControl