import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  form: {
    width: 275,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

const ContactForm = ({ contacts, onAdd }) => {
  const classes = useStyles();
  let item = { name: "", number: "" };

  const onInputChange = (event) => {
    item = { ...item, [event.target.id]: event.target.value };
  };

  const isAlreadyContact = () => {
    const Names = contacts.map((contact) => contact.name);
    return Names.includes(item.name);
  };

  const onSave = (e) => {
    e.preventDefault();
    isAlreadyContact()
      ? alert(`${item.name} is already in contacts.`)
      : onAdd(item);
  };

  return (
    <form className={classes.form} onSubmit={onSave}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <Button variant="contained" color="primary" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch(contactsOperations.addContact(value)),
  };
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onAdd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactForm);
