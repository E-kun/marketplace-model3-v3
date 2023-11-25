import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/users/userSlice";
import resourceReducer from "./features/resources/resourceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    resource: resourceReducer,
  },
});

export default store;
