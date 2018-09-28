import React, { Component } from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Vondella",
          email: "kulahill21@gmail.com",
          phone: "555"
        },
        {
          id: 2,
          name: "Vondella",
          email: "kulahill21@gmail.com",
          phone: "4567"
        }
      ]
    };
  }
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: this.state.contacts.filter(contact => contact.id !== id)
      };
    });
  };
  render() {
    return (
      <div>
        <h1 className="display-4 mb-3">
          <span className="text-danger">Contact Lists</span>
        </h1>
        {this.state.contacts.map(contact => (
          <Contact
            key={contact.id}
            Contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
