import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  static defaultProps = {
    name: "",
    number: "",
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className="lable">
            <span className={style.span}>Name</span>
            <input
              className={style.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId} className="lable">
            <span className={style.span}>Number</span>
            <input
              className={style.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.numberInputId}
            />
          </label>

          <button className={style.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;