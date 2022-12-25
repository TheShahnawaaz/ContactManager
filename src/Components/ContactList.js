import React from "react";
import ContactCards from "./ContactCards";

export default function ContactList(props) {
  //   // //console.log(props);
  const renderContactList = props.Contact.map((person) => {
    return <ContactCards person={person} getContactID={props.getContactID} />;
  });

  return (
    <div
      className="ui container center"
      style={{
        width: "auto",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <i className="address book icon"></i>
        Contact List
      </h1>
      <div className="ui divider"></div>
      <div className="ui middle aligned divided selection animated list">
        {props.Contact.length ? (
          renderContactList
        ) : (
          <div>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              No Contacts
            </h2>
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Add a contact to see it here
            </h3>
          </div>
        )}
      </div>
    </div>
  );

  //   return <div className="ui celled list">Contact List</div>;
}
