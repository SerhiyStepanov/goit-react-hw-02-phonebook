// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Fragment } from "react";
import shortid from "shortid";
import ContactList from "./components/ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      // {
      //   id: shortid.generate(),
      //   name: "Anna",
      //   number: "333",
      // },
      // {
      //   id: shortid.generate(),
      //   name: "Serhiy",
      //   number: "555",
      // },
      // {
      //   id: shortid.generate(),
      //   name: "Tanja",
      //   number: "999",
      // },
    ],
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts } = this.state;
    const inputNameId = shortid.generate();
    const inputNumberId = shortid.generate();
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor={inputNameId}>Name</label>
          <input
            type="text"
            name="name"
            id={inputNameId}
            value={this.state.name}
            onChange={this.onInputChange}
          />

          <label htmlFor={inputNumberId}>Number</label>
          <input
            type="tel"
            name="number"
            id={inputNumberId}
            value={this.state.number}
            onChange={this.onInputChange}
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactList items={contacts} onDeleteContact={this.deleteContact} />
      </Fragment>
    );
  }
}
