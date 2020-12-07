import React, { Component } from "react";
import { Fragment } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
  };

  // onInputChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  submitFormHandler = (data) => {
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
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
    // const inputNameId = shortid.generate();
    // const inputNumberId = shortid.generate();
    return (
      <Fragment>
        <h1>Phonebook</h1>

        <Form onSubmit={this.submitFormHandler} />

        <h2>Contacts</h2>
        <ContactList items={contacts} onDeleteContact={this.deleteContact} />
      </Fragment>
    );
  }
}
