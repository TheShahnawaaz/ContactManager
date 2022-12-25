import React from "react";
import ContactCards from "./ContactCards";

export default function ContactList(props) {
  //   console.log(props);
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
        Contact List
      </h1>
      <div class="ui divider"></div>
      <div className="ui middle aligned divided selection animated list">
        {renderContactList}
      </div>
    </div>
  );

  //   return <div className="ui celled list">Contact List</div>;
}
