import styles from './Controls.module.css'
import { increaseSession, decreaseSession } from '../features/timer/timerSlice'
import { useSelector, useDispatch } from 'react-redux'

function SessionLength() {
  const sessionLengthValue = useSelector(state => state.timer.sessionLength)
  const dispatch = useDispatch()

  return (
    <div className={styles.control}>
      <p id="session-label">Session Length</p>
      <section className={styles.adjust}>
        <button id="session-increment" onClick={() => dispatch(increaseSession())}><i class="fa-solid fa-arrow-up"></i></button>
        {sessionLengthValue}
        <button id="session-decrement" onClick={() => dispatch(decreaseSession())}><i class="fa-solid fa-arrow-down"></i></button>
      </section>
    </div>
  )
}

export default SessionLength