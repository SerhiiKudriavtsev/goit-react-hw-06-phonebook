// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  removeContact,
  selectedFilter,
} from 'redux/contactSlice';
import {List, ListItem, Name, Number, Button} from './ContactList.styled';

const ContactList = () => { 
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const normilizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
}

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <Button type="button" id={id} onClick={() => dispatch(removeContact(id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
  </List>
  )
}

// ContactList.propTypes = {
//   onDeleleButton: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   )
// }


export default ContactList;