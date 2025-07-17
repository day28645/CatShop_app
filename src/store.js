import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice'
import AuthSlice from './slice/User'
const store = configureStore({
  reducer: {
    userauth:AuthSlice,
    counter: counterReducer, // Assign your reducer(s) to a key
  },
});

export default store;
