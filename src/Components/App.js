import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {uuid} from 'uuidv4';
// import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
// import "./App.css";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "Contact";
  const [Contact, setContact] = useState([]);
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContact(retriveContacts);
      // console.log("Data takem as");
      // console.log(Contact)
    }
    console.log(1);
  }, []);

  useEffect(() => {
    if (Contact.length !== 0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contact));
    console.log("data set as" + JSON.stringify(Contact));
    console.log(2);
  }, [Contact]);

  function hashCode(str) {
    var hash = 0;
    str.split("").forEach((char) => {
      hash += char.charCodeAt(0);
    });
    return hash;
  }
  const addContactHandler = (people) => {
    console.log(3);
    console.log(people);
    // setContact([...Contact, { id: uuid(), ...people }]);sond
    const { name, email } = people;
    if (
      Contact.find((person) => person.name === name && person.email === email)
    ) {
      showAlert(true, "WARNING", "Contact already exists");
    } else {
      const newHash = hashCode(name + email);
      const con = [...Contact, { id: newHash, ...people }];
      setContact(con);
      showAlert(true, "Contact Added", "New Contact Added Successfully");
    }
  };
  const getContactID = (id) => {
    console.log(4);
    const newContactList = Contact.filter((person) => {
      return person.id !== id;
    });
    // console.log(newContactList);
    showAlert(true, "Contact Deleted", "Contact Deleted Successfully");

    setContact(newContactList);
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (show, type, msg) => {
    setAlert({ show: show, type: type, msg: msg });
  };
  const [flexDirection, setFlexDirection] = useState("row");
  return (
    <div className="ui container" style={{ margin: "20px" }}>
      <Router>
        <Header />
        <Alert alert={alert} setAlert={setAlert} />
        <div
          className="ui grid boxxx"
          style={{ flexDirection: `${flexDirection}`, flexWrap: "nowrap" }}
        >
          <Sidebar len={Contact.length} setFlexDirection={setFlexDirection} />
          <div className="wide column" style={{ width: "100%" }}>
            <Routes>
              <Route
                exact
                path="/add"
                element={
                  <AddContact
                    addContactHandler={addContactHandler}
                    showAlert={showAlert}
                  />
                }
              />
              <Route
                exact
                path="/"
                element={
                  <ContactList Contact={Contact} getContactID={getContactID} />
                }
              />
              <Route path="/contact/:id" element={<ContactDetail />} />
            </Routes>
          </div>
        </div>
        {/* <hr /> */}
        {/* <div className="ui divider"></div> */}
      </Router>
    </div>
  );
}

export default App;
