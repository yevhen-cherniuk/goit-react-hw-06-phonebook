// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});

export default store;