"use client";
import { createSlice } from "@reduxjs/toolkit";

// Function to retrieve user info from localStorage safely
const getUserInfoFromLocalStorage = () => {
    if (typeof window === "undefined") {
        return null; // Don't access localStorage on the server
    }
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
};


// Initial state using the function to get user info
const initialState = {
    userInfo: getUserInfoFromLocalStorage(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setcredentials: (state, action) => {
            state.userInfo = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("userInfo", JSON.stringify(action.payload));
            }
        },
        logout: (state) => {
            state.userInfo = null;
            if (typeof window !== "undefined") {
                localStorage.removeItem("userInfo");
            }
        },
        // Action to load user info manually
        loadUserInfo: (state) => {
            const storedUserInfo = getUserInfoFromLocalStorage();
            if (storedUserInfo) {
                state.userInfo = storedUserInfo;
            }
        },
    },
});

// Export actions and reducer
export const { setcredentials, logout, loadUserInfo } = authSlice.actions;
export default authSlice.reducer;
