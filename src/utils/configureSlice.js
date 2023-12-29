import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
    name: 'configure',
    initialState:{
        langKey : "en"
    },
    reducers:{
        addLangKey: (state, action)=>{
            state.langKey = action.payload
        }
    }
})

export const { addLangKey} = configureSlice.actions;
export default configureSlice.reducer;