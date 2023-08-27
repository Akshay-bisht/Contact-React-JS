
import './App.css';
import React,{useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {

  const LOCAL_STORAGE = "contacts"
  const [data, setData] = useState([])

  const addContactHandler = (newss) => {
    setData([...data, {id:uuid(), ...newss}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = data.filter((contact)=> {
      return contact.id !== id;
    });
    setData(newContactList);
    }
  
  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if (retriveData) setData(retriveData);
  },[]);

  useEffect(() => {
    if (data.length >0) {
      localStorage.setItem(LOCAL_STORAGE,JSON.stringify(data));
    }
  },[data]);


  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts = {data} getContactId={removeContactHandler}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
