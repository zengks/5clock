import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: '5',
    sessionLength: '25',
    isPlayed: false,
    isPaused: true,
    isReset: false,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        increaseBreak: (state) => {
            if (parseInt(state.breakLength) < 60) {
                state.breakLength = (parseInt(state.breakLength) + 1).toString()
            } else {
                state.breakLength = '60'
            }
        },
        decreaseBreak: (state) => {
            if (parseInt(state.breakLength) > 1) {
                state.breakLength = (parseInt(state.breakLength) - 1).toString()
            } else {
                state.breakLength = '1'
            }
        },
        increaseSession: (state) => {
            if (parseInt(state.sessionLength) < 60) {
                state.sessionLength = (parseInt(state.sessionLength) + 1).toString()
            } else {
                state.sessionLength = '60'
            }
        },
        decreaseSession: (state) => {
            if (parseInt(state.sessionLength) > 1) {
                state.sessionLength = (parseInt(state.sessionLength) - 1).toString()
            } else {
                state.sessionLength = '1'
            }
        },
        resetTimer: (state) => {
            state.breakLength = 5
            state.sessionLength = 25
            state.isPlayed = false
            state.isPaused = true
            state.isReset = true
        },
        startAndStop: (state) => {
            state.isPlayed = !state.isPlayed
            state.isPaused = !state.isPaused
            state.isReset = false
            state.isAlarm = false
        },


    }
})

export const { increaseBreak, decreaseBreak, increaseSession, decreaseSession, resetTimer, startAndStop } = timerSlice.actions
export default timerSlice.reducer