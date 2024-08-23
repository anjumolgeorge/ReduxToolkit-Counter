import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name :"empty",
    age : 0
}

const FormSlice = createSlice ({
    name :"form",
    initialState,
    reducers : {
        submit : (state,action) => {
            state.name = action.payload.name
            state.age = action.payload.age

        }
    }
})

export default FormSlice.reducer
export const {submit} = FormSlice.actions