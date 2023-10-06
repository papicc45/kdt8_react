import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : { counter : 0 },
    reducers : {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addValue(state, action) {
            const { ten } = action.payload;
            state.counter += ten;
        }
    }
});


export const counterAction = counterSlice.actions;
export default counterSlice.reducer;