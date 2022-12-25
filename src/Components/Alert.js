import React from "react";

export default function Alert(props) {
  // console.log(props);

  const close = () => {
    const slides = document.querySelectorAll(".message");
    console.log("close");
    slides.forEach((card) => {
      card.style.transform = `translateX(-300%)`;
      card.style.opacity = "0";
    });
    //
    setTimeout(() => {
      props.setAlert(null);
    }, 2000);
  };

  if (props.alert) {
    setTimeout(() => {
      close();
      console.log("close auro");
      // props.setAlert(null);
    }, 3000);
  }
  const slides = document.querySelectorAll(".message");
  slides.forEach((card) => {
    card.style.transform = `translateX(-200%)`;
    card.style.opacity = "1";
  });


  return (
    props.alert && (
      <div
        class="ui message"
        id="alert"
        style={{
          position: "absolute",
          top: "0",
          left: "20%",
          width: "auto",
          transition: "all 0.5s ease-in-out",
          // transform: "translateX(10%)",
          zIndex: "1000",
        }}
      >
        <i class="close icon" onClick={close}></i>
        <div class="header">{props.alert.type}</div>
        <p>{props.alert.msg}</p>
      </div>
    )
  );
}
