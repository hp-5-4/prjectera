import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData:null,
    laoding:false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setSignupData(state,action){
            state.signupData=action.payload;
        },
        setLoading(state,action){
            state.laoding=action.payload;
        },
        setUser(state,action){
            state.user = action.payload;
        },
        setToken(state,action){
            state.token=action.payload;
        },
    }
})

export const {setSignupData,setLoading,setToken,setUser} = authSlice.actions;

export default authSlice.reducer;