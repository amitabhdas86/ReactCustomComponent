import React, {useState,useEffect} from 'react';
import './App.css';
import Header from  './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Folder from './Folder';
//The names are within curly braces because these are the default from
//the libraries and not created as part of the project
import {uuid} from 'uuidv4';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import Tab from './Tabbed';
import Carousels from './Carousels';
import SubmitForm from './SubmitForm';

function App() {
  const LOCAL_STORAGE="contacts";

  //useState an example of Hook
  //Intialise a collection (useState([]))
  const [contacts,setContacts]=useState([]);  

  const addContactHandler = (contact) =>{
    // npm install uuidv4
    //Spread Operator (...contacts)
    setContacts([...contacts,{id: uuid(),...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList=contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  //Mount event 
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[])

  //Updated event
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
      <Header/>
      <Switch>
      {/* contacts={contacts} getContactId={removeContactHandler} */}
      <Route path="/" exact component={()=><ContactList contacts={contacts} getContactId={removeContactHandler}/>} /> 
      <Route path="/add" component={()=><AddContact  addContactHandler={addContactHandler}/>}/>     
      <Route path="/tree" component={Folder}/>
      <Route path="/tab" component={Tab}/>
      <Route path="/carousel" component={Carousels}/>
      <Route path="/form" component={SubmitForm}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
