import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import Modal from "../Modal/Modal";
import Button from "@material-ui/core/Button";

export default class Phonebook extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <div>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Контакт удален</h1>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="button"
              onClick={this.toggleModal}
            >
              Закрыть
            </Button>
          </Modal>
        )}

        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList onClose={this.toggleModal} />
      </div>
    );
  }
}
