import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard"

const ContactList = (props) =>{
  const deleteContactHandler = (id) =>{
    props.getContactId(id);
  }
  
  const renderContact = props.contacts.map((contact) => {
    return (
      <ContactCard  data ={contact} clickHandler={ deleteContactHandler }/>
    )
  });
  return (
    <div className="ui celled list">
      <h1>Contact List</h1>
      <Link to="/add">
      
      <button className="ui button blue right">Add Contact</button>
      </Link>
      {renderContact}
    </div>
  );
}

export default ContactList;