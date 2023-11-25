import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resourceID: "",
  resourceName: "",
  subject: "",
  resourceType: "",
  resourcePrice: 0,
  createdAt: "",
};

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    createResource(state, action) {},
    updateResource(state, action) {},
    deleteResource(state, action) {},
  },
});

export const { createResource, updateResource, deleteResource } =
  resourceSlice.actions;

export default resourceSlice.reducer;
