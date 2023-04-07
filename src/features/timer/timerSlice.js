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
            state.breakLength += 1
        },
        decreaseBreak: (state) => {
            state.breakLength -= 1
        },
        increaseSession: (state) => {
            state.sessionLength += 1
        },
        decreaseSession: (state) => {
            state.sessionLength -= 1
        }
    }
})

export const { increaseBreak, decreaseBreak, increaseSession, decreaseSession } = timerSlice.actions
export default timerSlice.reducer