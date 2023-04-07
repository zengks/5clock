import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    isPlayed: false,
    isPaused: true,
    isReset: false,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        increaseBreak: (state) => {
            if (state.breakLength < 60) {
                state.breakLength += 1
            } else {
                state.breakLength = 60
            }
        },
        decreaseBreak: (state) => {
            if (state.breakLength > 1) {
                state.breakLength -= 1
            } else {
                state.breakLength = 1
            }
        },
        increaseSession: (state) => {
            if (state.sessionLength < 60) {
                state.sessionLength += 1
            } else {
                state.sessionLength = 60
            }
        },
        decreaseSession: (state) => {
            if (state.sessionLength > 1) {
                state.sessionLength -= 1
            } else {
                state.sessionLength = 1
            }
        },
        resetTimer: (state) => {
            state.breakLength = 5
            state.sessionLength = 25
            state.isPlayed = false
            state.isPaused = true
            state.isReset = true
        }
    }
})

export const { increaseBreak, decreaseBreak, increaseSession, decreaseSession, resetTimer } = timerSlice.actions
export default timerSlice.reducer