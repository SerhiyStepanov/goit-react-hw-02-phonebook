// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Fragment } from "react";
import shortid from "shortid";
import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      {
        id: shortid.generate(),
        name: "Anna",
        number: "333",
      },
      {
        id: shortid.generate(),
        name: "Serhiy",
        number: "555",
      },
      {
        id: shortid.generate(),
        name: "Tanja",
        number: "999",
      },
    ],
    name: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // addContact = (data) => {
  //   return {
  //     id: "aaa",
  //     name: "Anna",
  //     number: "333",
  //   };
  // };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <h2>Contacts</h2>
        <ContactList items={contacts} onDeleteContact={this.deleteContact} />
      </Fragment>
    );
  }
}
