import styles from './Controls.module.css'
import { increaseSession, decreaseSession } from '../features/timer/timerSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

function SessionLength() {
  const { sessionLength, isPlayed } = useSelector(state => state.timer)
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(isPlayed)
  }, [isPlayed])

  return (
    <div className={styles.control}>
      <p id="session-label">Session Length</p>
      <section className={styles.adjust} id='session-length'>
        <button disabled={disabled} id="session-increment" onClick={() => dispatch(increaseSession())}><i class="fa-solid fa-arrow-up"></i></button>
        {sessionLength}
        <button disabled={disabled} id="session-decrement" onClick={() => dispatch(decreaseSession())}><i class="fa-solid fa-arrow-down"></i></button>
      </section>
    </div>
  )
}

export default SessionLength