import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },
        msg: "",
    },
    reducers:{
        getUsersStart: (state)=>{
            state.users.isFetching = true;
        },
        getUsersSuccess: (state, actions)=>{
            state.users.isFetching = false;
            state.users.allUsers = actions.payload;
            state.users.error = false;
        },
        getUsersFailed: (state)=>{
            state.users.isFetching = false;
            state.users.error = true;
            state.users.allUsers = null;
        },
        deleteUsersStart: (state)=>{
            state.users.isFetching = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deleteUsersFailed: (state, action)=>{
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        }
    }
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
    deleteUsersSuccess,
    deleteUsersFailed,
    deleteUsersStart
} = userSlice.actions;

export default userSlice.reducer;