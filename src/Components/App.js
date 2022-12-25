import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {uuid} from 'uuidv4';
// import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import "./App.css";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "Contact";
  const [Contact, setContact] = useState([]);
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContact(retriveContacts);
      //console.log("Data takem as");
      // //console.log(Contact);
    }
    // // //console.log(1);
  }, []);

  useEffect(() => {
    if (Contact.length !== 0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contact));
    // //console.log("data set as" + JSON.stringify(Contact));
    //console.log(2);
  }, [Contact]);

  function hashCode(str) {
    var hash = 0;
    str.split("").forEach((char) => {
      hash += char.charCodeAt(0);
    });
    return hash;
  }

  const upadteContactHandler = (people, key) => {
    //console.log(people);
    //console.log(key);
    // getContactID(key);
    var fullname = people["name"];
    people["name"] = "";
    //console.log(fullname);
    fullname.split(" ").map((word) => {
      return (
        word !== "" &&
        (people["name"] =
          people["name"] +
          word[0].toUpperCase() +
          word.slice(1).toLowerCase() +
          " ")
      );
    });
    //console.log(fullname);
    // people["name"] = fullname;
    // people["name"] = people["name"][0].toUpperCase() + people["name"].slice(1).toLowerCase();
    //capitalize email
    if (people["email"])
      people["email"] =
        people["email"][0].toUpperCase() +
        people["email"].slice(1).toLowerCase();
    else people["email"] = "No@mail";

    var { name, email } = people;
    // name to capitalize
    const no = people["no"];
    //console.log(name, email, no);
    if (
      Contact.find(
        (person) =>
          person.name === name && person.email === email && person.no === no
      )
    ) {
      showAlert("error", "WARNING", "Contact Not edited");
    } else {
      const newHash = hashCode(name + email + no);

      let con = Contact.filter((p) => {
        //console.log(p);
        return p.id !== key;
      });
      // let con = Contact;
      const cont = [...con, { id: newHash, ...people }];

      // const con = [...Contact, { id: newHash, ...people }];
      // //console.log(Contact);
      // //console.log(con);
      setContact(cont);
      // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contact));

      showAlert("success", "Contact Updated", "Contact Updated Successfully");
    }
  };

  const addContactHandler = (people) => {
    // // //console.log(3);
    // // // //console.log(people);
    // setContact([...Contact, { id: uuid(), ...people }]);sond
    // people["name"] = people["name"][].toLowerCase();
    // capilatize name
    //console.log(Contact);
    //console.log(people);
    var fullname = people["name"];
    people["name"] = "";
    //console.log(fullname);
    fullname.split(" ").map((word) => {
      return (
        word !== "" &&
        (people["name"] =
          people["name"] +
          word[0].toUpperCase() +
          word.slice(1).toLowerCase() +
          " ")
      );
    });
    //console.log(fullname);
    // people["name"] = fullname;
    // people["name"] = people["name"][0].toUpperCase() + people["name"].slice(1).toLowerCase();
    //capitalize email
    if (people["email"])
      people["email"] =
        people["email"][0].toUpperCase() +
        people["email"].slice(1).toLowerCase();
    else people["email"] = "No@mail";

    var { name, email } = people;
    // name to capitalize
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const no = people["no"];
    //console.log(name, email, no);
    if (
      Contact.find(
        (person) =>
          person.name === name && person.email === email && person.no === no
      )
    ) {
      showAlert("black", "WARNING", "Contact already exists");
    } else {
      const newHash = hashCode(name + email + no);
      const con = [...Contact, { id: newHash, ...people }];
      // //console.log(Contact);
      // //console.log(con);
      setContact(con);
      showAlert("success", "Contact Added", "New Contact Added Successfully");
    }
  };
  const getContactID = (id) => {
    // // // //console.log(4);
    const newContactList = Contact.filter((person) => {
      return person.id !== id;
    });
    // showAlert(true, "Contact Deleted", "Contact Deleted Successfully");
    setContact(newContactList);
    //console.log(newContactList);
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
              <Route
                path="/edit/:id"
                element={
                  <EditContact
                    upadteContactHandler={upadteContactHandler}
                    showAlert={showAlert}
                  />
                }
              />
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
