import styles from '../components/Controls.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { increaseBreak, decreaseBreak } from '../features/timer/timerSlice'
import { useEffect, useState } from 'react'

function BreakLength() {
  const { breakLength, isPlayed } = useSelector(state => state.timer)
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(isPlayed)
  }, [isPlayed])

  return (
    <div className={styles.control}>
      <p id="break-label">Break Length</p>
      <section className={styles.adjust} id='break-length'>
        <button disabled={disabled} id="break-increment" onClick={() => dispatch(increaseBreak())}><i class="fa-solid fa-arrow-up"></i></button>
        {breakLength}
        <button disabled={disabled} id="break-decrement" onClick={() => dispatch(decreaseBreak())}><i class="fa-solid fa-arrow-down"></i></button>
      </section>
    </div>
  )
}
export default BreakLength