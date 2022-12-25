import React from "react";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function EditContact(props) {
  //   //console.log(props);
  const location = useLocation();
  const { person } = location.state;
  //   //console.log(person);
  const [newName, setNewName] = useState(person.name);
  const [newEmail, setNewEmail] = useState(person.email);
  const [newNoHal, setNewNoHal] = useState(person.no);

  const updateContact = (e) => {
    e.preventDefault();

    var newno;
    if (newNoHal) {
      if (newNoHal[0] !== "+") newno = "+" + newNoHal;
      else newno = newNoHal;
    } else newno = "+91XXXXXXXXXX";

    //console.log(newNoHal);

    e.preventDefault();
    if (newName === "" || (newEmail === "" && newNoHal === "")) {
      props.showAlert(true, "Error", "Please fill all the fields");
      // //console.log("Please fill all the fields");
      return;
    }

    // props.getContactID(person.id);
    //console.log("deleted");
    var name = newName;
    var email = newEmail;
    var no = newno;
    // //console.log({ name, email, no });
    props.upadteContactHandler({ name, email, no }, person.id);

    setNewName("");
    setNewEmail("");
    setNewNoHal("");
    // //console.log("summmmm");
  };

  return (
    <div className="ui main" style={{ width: "auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <i className="pencil alternate icon"></i>
        Edit Contact
      </h1>
      <div className="ui divider"></div>

      <form className="ui form" onSubmit={updateContact}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="field">
          {/* <div className="form_group"> */}

          {/* <input id="btnSubmit" className="btn" type="button" value="SUBMIT" /> */}
          {/* </div> */}
          <label>Phone Number</label>
          <PhoneInput
            // international
            placeholder="Phone Number"
            value={newNoHal}
            preferredCountries={["in", "us"]}
            country="in"
            enableSearch={true}
            inputclassName="pad"
            autocompleteSearch={true}
            // showDropdown={true}
            prefix="+"
            // disableDropdown={true}
            disableSearchIcon={true}
            onChange={setNewNoHal}
          />
        </div>
        {/* {value} */}
        <button id="btnSubmit" className="ui button blue">
          <i className="pencil alternate icon"></i>
          Update
        </button>
      </form>
      {/* <script src={script}></script> */}
    </div>
  );
}
