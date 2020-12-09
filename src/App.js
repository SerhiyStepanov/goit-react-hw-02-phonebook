import React, { Component } from "react";
import { Fragment } from "react";
import shortid from "shortid";
import ContactForm from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [{ name: "qqq" }],
    filter: "",
  };

  addContact = (data) => {
    // console.log(data.name);  приходит дата из сабмита
    const { contacts } = this.state;
    contacts.find((el) => {
      if (el.name === data.name) alert(` ${data.name} is already in contacts`);
      return { contacts };
    });

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  // addContact = (data) => {
  //   console.log(data.name);

  //   const contact = {
  //     id: shortid.generate(),
  //     name: data.name,
  //     number: data.number,
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, contact],
  //   }));
  // };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterContacts = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  visibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.visibleContacts();

    return (
      <Fragment>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterContacts} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}
