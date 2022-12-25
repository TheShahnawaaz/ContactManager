import React from "react";
import { Link, useLocation } from "react-router-dom";
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

export default function ContactDetail(props) {
  const avatar = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _0];
  const location = useLocation();
  const { person } = location.state;
  //   console.log(props.location.state.contact);
  const { id, name, email } = person;
  // console.log(person);
  return (
    <div class="ui main">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Contact Detail
      </h1>
        <div class="ui divider"></div>
      <div class="ui centered card">
        <div class="ui centered card">
          <img src={avatar[id % avatar.length]} alt="avt" />
          <div class="content">
            <div class="header" href="#">
              {name}
            </div>
            <div class="description">{email}</div>
          </div>
        </div>
        <Link to="/">
          <button class="ui labeled icon button" style={{ width: "100%" }}>
            <i class="left chevron icon"></i>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
