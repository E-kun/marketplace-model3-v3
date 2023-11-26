import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resourceID: "",
  resourceName: "",
  resourceDescription: "",
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

// export async function getResources() {
//   const res = await fetch(
//     `https://6562f1caee04015769a6a775.mockapi.io/resources`
//   );

//   const data = await res.json();
//   return data;
// }

export default resourceSlice.reducer;
