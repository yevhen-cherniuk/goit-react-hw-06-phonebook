import React from "react";
import { connect } from 'react-redux';
import phonebookActions from "../../redux/phonebook/phonebookActions";
import PropTypes from 'prop-types';
import style from "./Filter.module.css";

const Filter = ({ filter, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={style.label}>
      <span className={style.span}>Find contacts</span>
      <input
        className={style.input}
        type="text"
        placeholder="name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToprops = {
  onChange: phonebookActions.filter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);