import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  createdAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: {},
    updateDetails: {},
  },
});

export const { createUser, updateDetails } = userSlice.actions;

export default userSlice.reducer;
