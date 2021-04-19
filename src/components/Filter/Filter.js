import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFilter } from "../../redux/contacts";

const Filter = ({ updateFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={updateFilter} id="find"></input>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    updateFilter: (event) => dispatch(updateFilter(event.target.value)),
  };
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(Filter);
