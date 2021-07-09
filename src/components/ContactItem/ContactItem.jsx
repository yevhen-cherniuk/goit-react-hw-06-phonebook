import React from "react";
import style from "./ContactItem.module.css";

const ContactItem = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li className={style.item} key={id}>
        <span className={style.span}></span>
        {name}: {number}
        <button
          type="button"
          className={style.btnList}
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;