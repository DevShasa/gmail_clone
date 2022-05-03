import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
    name: "mail",

    initialState:{
        selectedMail: null,
        sendMessageIsOpen: false
    },

    reducers:{
        selectMail:(state, action) => {
            state.selectedMail = action.payload
        },

        openSendMessage: (state)=>{
            state.sendMessageIsOpen=true
        },

        closeSendMessage: (state)=>{
            state.sendMessageIsOpen = false
        }
    }, 

})

// Export the actions 
export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;
//export the reducer
export default mailSlice.reducer;