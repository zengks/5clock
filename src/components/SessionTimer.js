import { useEffect, useState } from 'react'
import styles from './SessionTimer.module.css'
import { useSelector } from 'react-redux'

import soundTrack from '../media/Alarm-ringtone.mp3'

function SessionTimer() {

  const { breakLength, sessionLength, isPlayed, isPaused, isReset } = useSelector(state => state.timer)

  const [startBreak, setStartBreak] = useState(false)

  const [minutes, setMinutes] = useState(sessionLength)

  const [second, setSecond] = useState('00')

  useEffect(() => {
    const sound = new Audio(soundTrack)

    if (isReset) {
      setSecond('00')
      setMinutes(sessionLength)
    }

    if (isPlayed && !isPaused) {
      setTimeout(() => {
        if (parseInt(second) > 0 && parseInt(minutes) >= 0) {
          if (parseInt(second) <= 10) {
            setSecond('0' + (parseInt(second) - 1).toString())
          } else {
            setSecond((parseInt(second) - 1).toString())
          }
        } else if (parseInt(second) === 0 && parseInt(minutes) > 0) {
          if (parseInt(minutes) <= 10) {
            setMinutes('0' + (parseInt(minutes) - 1).toString())
          } else {
            setMinutes((parseInt(minutes) - 1).toString())
          }
          setSecond('59')
        } else if (parseInt(second) === 0 && parseInt(minutes) === 0) {
          setStartBreak(!startBreak)
          sound.play()
          setTimeout(() => {
            sound.pause()
          }, 2000);

          setSecond('00')
          return
        }
      }, 1000);

      if (startBreak) {
        setMinutes(() => {
          if (parseInt(breakLength) < 10) {
            return '0' + breakLength.toString()
          } else {
            return sessionLength.toString()
          }
        })
        setTimeout(() => {
          if (parseInt(second) > 0 && parseInt(minutes) >= 0) {
            if (parseInt(second) <= 10) {
              setSecond('0' + (parseInt(second) - 1).toString())
            } else {
              setSecond((parseInt(second) - 1).toString())
            }
          } else if (parseInt(second) === 0 && parseInt(minutes) > 0) {
            if (parseInt(minutes) <= 10) {
              setMinutes('0' + (parseInt(minutes) - 1).toString())
            } else {
              setMinutes((parseInt(minutes) - 1).toString())
            }
            setSecond('59')
          } else if (parseInt(second) === 0 && parseInt(minutes) === 0) {
            sound.pause()
            setStartBreak(!startBreak)
            setMinutes(() => {
              if (parseInt(sessionLength) < 10) {
                return '0' + sessionLength.toString()
              } else {
                return sessionLength.toString()
              }
            })
            setSecond('00')
            return
          }
        }, 1000);
      }
    }
  }, [breakLength, isPaused, isPlayed, isReset, minutes, second, sessionLength, startBreak])

  return (
    <div className={styles.timer} id='time-left'>
      <p className={styles.title} id='timer-label'>
        {startBreak ? 'Break' : 'Session'}
      </p>
      <p className={styles.time} id='time-left'>{`${minutes}:${second}`}</p>
      <audio id='beep'>
        <source src="../media/Alarm-ringtone.mp3" />
      </audio>
    </div>
  )
}

export default SessionTimer