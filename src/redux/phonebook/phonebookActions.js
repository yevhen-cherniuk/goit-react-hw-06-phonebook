// import { ADD, REMOVE, FILTER } from "./phonebookTypes";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addItem = createAction("phonebook/add", (name, number) => ({ payload: { id: uuid(), name, number } }));

// const addItem = (name, number) => {
//   return {
//     type: ADD,
//     payload: {
//       id: uuid(),
//       name: name,
//       number: number,
//     },
//   };
// };

const removeItem = createAction("phonebook/remove");

// const removeItem = (id) => {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// };

const filter = createAction("phonebook/filter");

// const filter = (str) => {
//   return {
//     type: FILTER,
//     payload: str,
//   };
// };

export default { addItem, removeItem, filter };