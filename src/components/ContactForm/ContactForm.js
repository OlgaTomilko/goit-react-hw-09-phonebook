import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  form: {
    width: 275,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default function ContactForm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getContacts);
  const onAdd = value => {
    dispatch(contactsOperations.addContact(value));
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = ({ target: { id, value } }) => {
    id === 'name' ? setName(value) : setNumber(value);
  };

  const isAlreadyContact = () => {
    const Names = contacts.map(contact => contact.name);
    return Names.includes(name);
  };

  const onSave = e => {
    e.preventDefault();
    if (name === '' || number === '') {
      alert(`Complite the form!`);
      return;
    }
    isAlreadyContact()
      ? alert(`${name} is already in contacts!`)
      : onAdd({ name, number });
    setNumber('');
    setName('');
  };

  return (
    <form className={classes.form} onSubmit={onSave}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name" value={name} />
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number" value={number} />
      <Button variant="contained" color="primary" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
}
