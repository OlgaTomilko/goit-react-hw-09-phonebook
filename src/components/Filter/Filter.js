import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = useCallback(
    event => {
      dispatch(updateFilter(event.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChange} id="find"></input>
    </div>
  );
}
