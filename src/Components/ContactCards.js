import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Images/logo.jpg";
import _1 from "../Images/avatar/1.png"; // Tell webpack this JS file uses this image
import _2 from "../Images/avatar/2.png"; // Tell webpack this JS file uses this image
import _3 from "../Images/avatar/3.png"; // Tell webpack this JS file uses this image
import _4 from "../Images/avatar/4.png"; // Tell webpack this JS file uses this image
import _5 from "../Images/avatar/5.png"; // Tell webpack this JS file uses this image
import _6 from "../Images/avatar/6.png"; // Tell webpack this JS file uses this image
import _7 from "../Images/avatar/7.png"; // Tell webpack this JS file uses this image
import _8 from "../Images/avatar/8.png"; // Tell webpack this JS file uses this image
import _9 from "../Images/avatar/9.png"; // Tell webpack this JS file uses this image
import _10 from "../Images/avatar/10.png"; // Tell webpack this JS file uses this image
import _11 from "../Images/avatar/11.png"; // Tell webpack this JS file uses this image
import _0 from "../Images/avatar/0.png"; // Tell webpack this JS file uses this image

export default function ContactCards(props) {
  const { id, name, email } = props.person;
  const avatar = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _0];
  return (
    <div className="item">
      <div class="right floated content">
        <div class="ui button small">
          <i
            className="trash alternate outline icon left"
            style={{
              color: "red",
            }}
            onClick={() => props.getContactID(id)}
          ></i>
        </div>
      </div>
      <img
        className="ui avatar image"
        src={avatar[id % avatar.length]}
        alt="user"
      />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ person: props.person }}>
          {/* <p>{id}</p> */}
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
    </div>
  );
}
