import React, { Component } from "react";
import { connect } from 'react-redux';
import phonebookActions from "../../redux/phonebook/phonebookActions";
import style from "./FormAddContacts.module.css";
import Alert from "../Alert/Alert";
import { CSSTransition } from "react-transition-group";

class FormAddContacts extends Component {
  state = {
    name: "",
    number: "",
    isAdded: false,
    message: "",
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleClearForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (!name || !number) {
      this.setState({ isAdded: true, message: "Fill in all the fields" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
      return;
    }

    if (contacts.find((el) => el.name === name)) {
      this.setState({ isAdded: true, message: "Contact already exist" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    } else {
      this.props.addContact(name, number);
      this.setState({ isAdded: true, message: "Contact added successfully" });
      setTimeout(() => {
        this.setState({ isAdded: false });
      }, 2000);
    }
    this.handleClearForm();
  };
  
   render() {
    const { name, number, isAdded, message } = this.state;
    return (
      <>
        <form className={style.form} onSubmit={this.handlesubmit}>
          <label className="lable">
            <span className={style.span}>Name</span>
            <input
              className={style.input}
              type="text"
              placeholder="Name Surname"
              value={name}
              onChange={(e) => this.handleChangeName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
            />
          </label>
          <label className="lable">
            <span className={style.span}>Number</span>
            <input
              className={style.input}
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => this.handleChangeNumber(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.numberInputId}
            />
          </label>
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </form>
        <CSSTransition in={isAdded} timeout={500} classNames="fade-alert" unmountOnExit>
          <Alert message={message} />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

const mapDispatchToprops = {
  addContact: phonebookActions.addItem,
};

export default connect(mapStateToProps, mapDispatchToprops)(FormAddContacts);