import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./App.css";
import { CSSTransition } from "react-transition-group";

// Components
import Container from './components/Container/Container';
import FormAddContacts from "./components/FormAddContacts/FormAddContacts";
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.contacts !== this.props.contacts) {
      const localContacts = JSON.stringify(this.props.contacts);
      localStorage.setItem("contacts", localContacts);
    }
  }

  render() {
    const { contacts } = this.props;


    return (
      <Container title="Phonebook">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
          <h1 className="title">Phonebook</h1> 
        </CSSTransition>        
        <FormAddContacts />
        <h2 className="title">Contacts</h2>
          <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
            <Filter />
          </CSSTransition>
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

export default connect(mapStateToProps)(App);