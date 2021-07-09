import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./App.css";

// Components
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  static defaultProps = {
    contacts:  [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  formAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.contacts !== this.state.contacts) {
      const localContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem("contacts", localContacts);
    }
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container title="Phonebook">
        <h1 className="title">Phonebook</h1> 
        <ContactForm onSubmit={this.formAddContact} />
        <h2 className="title">Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;