import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";
import style from "./ContactItem.module.css";

const ContactItem = ({ el, handleDelete }) => {
  const { name, number, id } = el;
  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <li className={style.item} key={id}>
      <span className={style.span}></span>
      {name}: {number}
      <button
        type="button"
        className={style.btnList}
        onClick={handleClick}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  el: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const mapDispatchToprops = {
  handleDelete: phonebookActions.removeItem,
};

export default connect(null, mapDispatchToprops)(ContactItem);