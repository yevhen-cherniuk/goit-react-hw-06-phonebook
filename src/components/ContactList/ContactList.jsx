import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={style.list}>
      <ContactItem contacts={contacts} deleteContact={deleteContact} />
    </ul>
  );
};

export default ContactList;