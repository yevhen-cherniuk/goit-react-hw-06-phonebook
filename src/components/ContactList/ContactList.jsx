import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.module.css";

const ContactList = ({ contacts, filter }) => {
  console.log(contacts);
  const getFilteredContact = (items, query) => {
    return items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  };
  const visibleContacts = getFilteredContact(contacts, filter);

  return (
    <TransitionGroup component="ul" className="contact-list">
      {visibleContacts.map((el) => {
        return (
          <CSSTransition key={el.id} timeout={500} classNames="item">
            <ContactItem el={el} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
  filter: contacts.filter,
});

export default connect(mapStateToProps)(ContactList);