import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: 1,
    reducers: {
        nextPage(state, action) {
            state = action.payload
            console.log(JSON.parse(JSON.stringify(state)), 'next')
            return state
        },
        previousPage(state, action) {
            state = action.payload
            console.log(JSON.parse(JSON.stringify(state)), 'prev')
            return state
        }
    }
});

export const { nextPage, previousPage } = paginationSlice.actions

export default paginationSlice.reducer