import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Filter.module.css";

const filterInputId = uuidv4();

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      <span className={style.span}>Find contacts</span>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;