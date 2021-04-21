import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Button from '@material-ui/core/Button';

export default function ContactList({ onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handlerDelete = event => {
    onDelete(event.currentTarget.id);
    onClose();
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <Button
              color="secondary"
              type="button"
              id={id}
              onClick={handlerDelete}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

//

ContactList.propTypes = {
  onClose: PropTypes.func.isRequired,
};
