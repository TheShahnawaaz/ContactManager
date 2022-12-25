import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      //   document.body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.getElementById("navbar").classList.add("horizontal");
        document.getElementById("navbar").classList.remove("vertical");
        document.getElementById("leftbar").style.width = "100%";
        document.getElementById("leftbar").style.paddingTop = "0";
        props.setFlexDirection("column");
        document
          .getElementById("navbar")
          .getElementsByClassName("item").style.fontSize = "1.5rem";
        // ////console.log(
        //   document.getElementById("navbar").getElementsByClassName("item")
        // );
      }, 1000);

      //   // ////console.log("mobile");
    } else {
      setTimeout(() => {
        document.getElementById("navbar").classList.add("vertical");
        document.getElementById("navbar").classList.remove("horizontal");
        document.getElementById("leftbar").style.width = "50%";
        document.getElementById("leftbar").style.paddingTop = "5rem";
        props.setFlexDirection("row");
      }, 200);
      //   document.body.style.backgroundColor = "pink";
      //   // ////console.log("desktop");
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction);
  // ////console.log(props);
  return (
    <div
      className="wide column"
      id="leftbar"
      style={{ width: "50%", paddingTop: "5rem" }}
    >
      <div
        className="ui fluid menu vertical"
        id="navbar"
        style={{ justifyContent: "space-between" }}
      >
        <Link
          to="/"
          className="active teal item"
          id="contact_button"
          onClick={() => {
            document.getElementById("add_button").classList.remove("active");
            document.getElementById("contact_button").classList.add("active");
          }}
        >
          Contacts  
          <i className="address book icon"></i>
          <div className="ui teal left pointing label">{props.len}</div>
        </Link>
        <Link
          to="/add"
          id="add_button"
          className="item teal"
          onClick={() => {
            document
              .getElementById("contact_button")
              .classList.remove("active");
            document.getElementById("add_button").classList.add("active");
          }}
        >
          Add Contact  
          <i className="user plus icon"></i>
        </Link>
        <Link to="/add" className="item disabled">
          Bin  
          <i className="recycle icon"></i>
          <div className="ui label">0</div>
        </Link>
      </div>
    </div>
  );
}
