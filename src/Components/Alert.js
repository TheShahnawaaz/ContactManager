import React from "react";

export default function Alert(props) {
  console.log(props);
  const close = () => {
    // console.log("close");
    props.setAlert(null);
  };
  return (
    props.alert && (
      <div
        class="ui message"
        style={{ position: "absolute", top: "0", left: "60%", width: "auto",transition: "all 0.5s ease-in-out" }}
      >
        <i class="close icon" onClick={close}></i>
        <div class="header">{props.alert.type}</div>
        <p>{props.alert.msg}</p>
      </div>
    )
  );
}
