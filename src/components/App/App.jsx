// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import { Div, Title, Text } from './App.styled';
import { selectedContacts } from 'redux/contactSlice';

export default function App() {
  const contacts = useSelector(selectedContacts);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // }
    
  // );
  // const [filterText, setFilterText] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = ({name, number}) => { 
  //   // const { contacts } = this.state;
  //   const id = nanoid();
  //   const contactItem = {
  //     id,
  //     name,
  //     number,
  //   }
  //   console.log(contactItem);
  //   return contacts.some((contact) => contact.name.toLowerCase() === contactItem.name.toLowerCase())
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts([...contacts, contactItem])
  // };

  // const deleteContact = (e) => {
  //   const contactId = e.currentTarget.id;
  //   setContacts(contacts.filter((contact) => contact.id !== contactId));
  // };

  // const filteredContactList = () => {
  //   // const { filterText, contacts } = this.state;
  //   const normilizedValue = filterText.toLowerCase().trim();
  //     return contacts
  //       .filter(contact =>
  //         contact.name.toLowerCase().includes(normilizedValue))
  //       .sort((a, b) => a.name.localeCompare(b.name));
  //   };

  // const changeFilter = (e) => { 
  //   setFilterText(e.currentTarget.value );
  // }

  // const filteredContacts = filteredContactList();

   return (
      <Div>
        <Title>Phonebook</Title>
        <ContactForm />
        
        <Title>Contacts</Title>
        {contacts.length > 0 ? (
        <>
          <ContactFilter />
          <ContactList />
        </>
      ) : (
        <Text>Contact list is empty</Text>
      )}
      </Div>
  )
  
  // return (
  //     <Div>
  //       <Title>Phonebook</Title>
  //       <ContactForm onSubmitForm={formSubmitHandler} />
        
  //       <Title>Contacts</Title>
  //       <ContactFilter
  //         value={filterText}
  //         onChange={changeFilter}
  //       />
  //       {contacts[0] && !filteredContacts[0] &&
  //       (<Text>Contact not found</Text>)}
        
  //       {contacts[0] ? (
  //         <ContactList
  //         contacts={filteredContacts}
  //         onDeleleButton={deleteContact}
  //       />
  //       ) : (<Text>Contact list is empty</Text>)  
  //       }
  //     </Div>
  // )
}


// class App extends Component {
//   state = {
//     contacts: [],
//     filterText: '',
//   }

//   componentDidMount() { 
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) { 
//       this.setState({contacts: parsedContacts});
//     }
//   }

//   componentDidUpdate(prevProps, prevState) { 
//     if (this.state.contacts.length !== prevState.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = ({name, number}) => { 
//     const { contacts } = this.state;
//     const id = nanoid();
//     const contactItem = {
//       id,
//       name,
//       number,
//     }

//     contacts.some(contact => contact.name.toLowerCase() === contactItem.name.toLowerCase())
//       ? alert(`${name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//       contacts: [...contacts, contactItem],
//     }))
//   };

//   deleteContact = (e) => {
//     const contactId = e.currentTarget.id;
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   filteredContactList = () => {
//     const { filterText, contacts } = this.state;
//     const normilizedValue = filterText.toLowerCase().trim();
//       return contacts
//         .filter(contact =>
//           contact.name.toLowerCase().includes(normilizedValue))
//         .sort((a, b) => a.name.localeCompare(b.name));
//     };

//   changeFilter = (e) => { 
//     this.setState({ filterText: e.currentTarget.value });
//   }

//   render() { 
//     const { contacts, filterText } = this.state;
//     const filteredContacts = this.filteredContactList();
//     return (
//       <Div>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmitForm={this.formSubmitHandler} />
        
//         <Title>Contacts</Title>
//         <ContactFilter
//           value={filterText}
//           onChange={this.changeFilter}
//         />
//         {contacts[0] && !filteredContacts[0] &&
//         (<Text>Contact not found</Text>)}
        
//         {contacts[0] ? (
//           <ContactList
//           contacts={filteredContacts}
//           onDeleleButton={this.deleteContact}
//         />
//         ) : (<Text>Contact list is empty</Text>)  
//         }
//       </Div>
//   );
//   }  
// };

// export default App;
