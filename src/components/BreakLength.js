import styles from '../components/Controls.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { increaseBreak, decreaseBreak } from '../features/timer/timerSlice'

function BreakLength() {
  const breakLengthValue = useSelector(state => state.timer.breakLength)
  const dispatch = useDispatch()

  return (
    <div className={styles.control}>
      <p id="break-label">Break Length</p>
      <section className={styles.adjust}>
        <button id="break-increment" onClick={() => dispatch(increaseBreak())}><i class="fa-solid fa-arrow-up"></i></button>
        {breakLengthValue}
        <button id="break-decrement" onClick={() => dispatch(decreaseBreak())}><i class="fa-solid fa-arrow-down"></i></button>
      </section>
    </div>
  )
}
export default BreakLength