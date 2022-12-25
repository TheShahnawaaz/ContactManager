import React from "react";

export default function Alert(props) {
  // // //console.log(props);

  const close = () => {
    const slides = document.querySelectorAll(".message");
    // //console.log("close");
    slides.forEach((card) => {
      card.style.transform = `translateX(-500%)`;
      card.style.opacity = "0";
    });
    //
    setTimeout(() => {
      props.setAlert(null);
    }, 1000);
  };

  if (props.alert) {
    setTimeout(() => {
      const slides = document.querySelectorAll(".message");
      slides[0].classList.add(props.alert.show);
      slides.forEach((card) => {
        // card.style.transform = `translateX(+500%)`;
        card.style.transform = `translateX(-5em)`;
        card.style.opacity = "1";
        // //console.log("open");
      });
    }, 100);
    // //console.log("openout");
    setTimeout(() => {
      close();
      // //console.log("close auro");
      // props.setAlert(null);
    }, 5000);
  }

  // const slides = document.querySelectorAll(".message");
  // slides.forEach((card) => {
  //   card.style.transform = `translateX(-200%)`;
  //   card.style.opacity = "1";
  //   // //console.log("open");
  // });

  return (
    props.alert && (
      <div
        className="ui message"
        id="alert"
        style={{
          position: "fixed",
          top: "0",
          // left: "40%",
          right: "0",
          width: "auto",
          opacity: "0",
          transition: "all 0.5s ease-in-out",
          // transform: "translateX(10%)",
          zIndex: "1000",
        }}
      >
        <i className="close icon" onClick={close}></i>
        <div className="header">{props.alert.type}</div>
        <p>{props.alert.msg}</p>
      </div>
    )
  );
}
