import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    count1 : 0, 
    count2 : 10
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
        }, 
        Incrementby5 : (state) => {
            state.count2 = state.count2 + 5
        }
    }
})
export default counterSlice.reducer
export const {Increment,Decrement,Incrementby5} = counterSlice.actions



