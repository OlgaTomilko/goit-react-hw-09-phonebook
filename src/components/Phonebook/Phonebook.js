import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Modal from '../Modal/Modal';
import Button from '@material-ui/core/Button';

export default function Phonebook() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h1>Контакт удален</h1>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={toggleModal}
          >
            Закрыть
          </Button>
        </Modal>
      )}

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onClose={toggleModal} />
    </div>
  );
}
