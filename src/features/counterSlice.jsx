import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    count1 : 0
}


const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        Increment : (state)=>  {
            state.count1 = state.count1 + 1
        },
        Decrement :(state) => {
            state.count1 = state.count1 - 1
        }
    }
})
export default counterSlice.reducer
export const {Increment,Decrement} = counterSlice.actions