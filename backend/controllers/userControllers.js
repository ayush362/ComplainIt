import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// @desc       Auth user/set token
// route       POST /API/USERS/auth
// @access      public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Auth User" });
});

// @desc       Register a n ew user
// route       POST /API/USERS
// @access      public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
});

// @desc       Logout User
// route       POST /API/USERS/logout
// @access      public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User" });
});

// @desc       Get User Profile
// route       GET /API/USERS/profile
// @access      private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: " User profile" });
});

// @desc       Update User profile
// route       PUT /API/USERS/profile
// @access      private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update User Profile" });
});
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
