import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { pushContact, selectedContacts } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import {Form, Div, Label, TitleForm, Input, Button} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);
  const [formInput, setFormInput] = useState({ name: '', number: '' });
  const { name, number } = formInput;
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const AddContact = ({ name, number }) => {
    const id = nanoid();
    const contactItem = {
      id,
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(pushContact(contactItem));
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };
  
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    AddContact({ name, number });
    setFormInput({ name: '', number: '' });
    // const contact = { name, number };
    // onSubmitForm(contact);
    // reset();
  }

  // const reset = () => { 
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Label> 
          <TitleForm>Name</TitleForm>
          <Input
            type="text"
            placeholder='Boris Jonsoniuk'
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          <TitleForm>Number</TitleForm>
          <Input
            type="tel"
              placeholder="+38 050 777 77 77"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
          />
        </Label>
      </Div>
      
        
      <Button type="submit">Add contact</Button>
    </Form>
  )
}

// ContactForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// }

// class ContactForm extends Component { 
//   state = { 
//     name: '',
//     number: '',
//   }

//   handleChange = (e) => { 
//     const { name, value } = e.currentTarget;
//     this.setState({[name]: value})
//   }

//   handleSubmit = (e) => { 
//     e.preventDefault(); 
//     this.props.onSubmitForm(this.state);
//     this.reset();
//   }

//   reset = () => { 
//     this.setState({
//       name: '',
//     number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Div>
//           <Label> 
//             <TitleForm>Name</TitleForm>
//             <Input
//               type="text"
//               placeholder='Boris Jonsoniuk'
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.handleChange}
//             />
//           </Label>
//           <Label>
//             <TitleForm>Number</TitleForm>
//               <Input
//               type="tel"
//                 placeholder="+38 050 777 77 77"
//                 name="number"
//                 value={number}
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 onChange={this.handleChange}
//               />
//             </Label>
//         </Div>
        
          
//           <Button type="submit">Add contact</Button>
//         </Form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// }

// export default ContactForm;