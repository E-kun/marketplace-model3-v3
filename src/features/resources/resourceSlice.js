import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resourceID: "",
  resourceName: "",
  resourceDescription: "",
  subject: "",
  resourceType: "",
  resourcePrice: 0,
  createdAt: "",
  isLoading: false,
};

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setCurrentResource(state, action) {
      state.resourceID = action.payload.id;
      state.resourceName = action.payload.name;
      state.resourceDescription = action.payload.description;
      state.subject = action.payload.subject;
      state.resourceType = action.payload.type;
      state.resourcePrice = action.payload.price;
      state.createdAt = action.payload.createdAt;
      state.isLoading = false;
    },
    createResource(state, action) {},
    updateResource(state, action) {},
    deleteResource(state, action) {},
    setIsLoading(state) {
      state.isLoading = true;
    },
  },
});

export const { createResource, updateResource, deleteResource, setIsLoading } =
  resourceSlice.actions;

export function getResource(id) {
  return async function (dispatch) {
    const res = await fetch(
      `https://6562f1caee04015769a6a775.mockapi.io/resources/${id}`
    );

    const data = await res.json();
    dispatch({ type: "resource/setCurrentResource", payload: data });
  };
}

export default resourceSlice.reducer;
