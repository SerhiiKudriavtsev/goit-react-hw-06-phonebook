// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectedFilter, filter } from 'redux/contactSlice';
import {Div, Label, Input, Title} from './ContactFilter.styled';

const ContactFilter = () => {
  const filterValue = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
    <Div>
      <Label>
        <Title>Fine contacts by name</Title>
        <Input
          type="text"
          name="filter"
          placeholder='Enter name'
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </Label>
    </Div>
  )
};

// ContactFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// }

export default ContactFilter;