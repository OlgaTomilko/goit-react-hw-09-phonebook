import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Button from '@material-ui/core/Button';

const ContactList = ({
  // filter,
  contacts,
  isLoading,
  onDelete,
  onClose,
  fetchContacts,
}) => {
  useEffect(() => fetchContacts(), [fetchContacts]);

  // const onFilterContacts = () => {
  //   const filterContacts = contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   return filterContacts;
  // };

  const handlerDelete = event => {
    onDelete(event.currentTarget.id);
    onClose();
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {
          // (filter ? onFilterContacts() : contacts)
          contacts.map(({ id, name, number }) => (
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
          ))
        }
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    filter: contactsSelectors.getFilter(state),
    isLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

ContactList.propTypes = {
  // filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
