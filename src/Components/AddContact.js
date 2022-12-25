import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AddContact(props) {
  // state = {
  //   name: "",
  //   email: "",
  //   no: "",
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHal, setNoHal] = useState("");
  // const [value, setValue] = useState("");

  // const [no, setNo] = useState("");

  const add = (e) => {
    // //console.log("Button Clicked");

    // const fullNo = code + "-" + noHal;
    e.preventDefault();
    // setNo(fullNo.toString());
    var no;
    if (noHal) {
      if (noHal.length !== 12 && noHal.length !== 2) {
        //console.log("Please enter a valid phone number");
        //console.log(noHal);
        props.showAlert("error", "Error", "Please enter a valid phone number");
        return;
      }
    }
    if (noHal.length === 12) {
      no = "+" + noHal;
      //console.log(no);
    } else no = "+91XXXXXXXXXX";

    //console.log(noHal);
    // var name = name.capitalize();
    // //console.log(name);

    // handleClick();
    if (name === "" || (email === "" && (noHal === "" || noHal.length == 2))) {
      props.showAlert("error", "Error", "Please fill all the fields");
      // //console.log("Please fill all the fields");
      return;
    }
    // if (email === "") setEmail("no@mail");
    // if (no === "") setNo("0000000000");
    // // //console.log(this.state);
    // if (no === "") no = "0000000000";
    // // //console.log({name, email, no});
    props.addContactHandler({ name, email, no });
    // this.setState({ name: "", email: "", no: "" });
    setName("");
    setEmail("");
    setNoHal("");
    // setNo("");
    // props.history.push("/");
  };

  // Use the useRef hook to create a ref for the input element

  //  $("#btnSubmit").on("click", function () {
  //    var code = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
  //    var phoneNumber = $("#txtPhone").val();
  //    var name = $("#txtPhone").intlTelInput("getSelectedCountryData").name;
  //    alert(
  //      "Country Code : " +
  //        code +
  //        "\nPhone Number : " +
  //        phoneNumber +
  //        "\nCountry Name : " +
  //        name
  //    );
  //  });

  return (
    <div className="ui main" style={{ width: "auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <i className="user plus icon"></i>
        Add Contact
      </h1>
      <div className="ui divider"></div>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={noHal}
            preferredCountries={["in", "us"]}
            country="in"
            enableSearch={true}
            inputclassName="pad"
            autocompleteSearch={true}
            // showDropdown={true}
            prefix="+"
            pattern="[0-9]{10}"
            // disableDropdown={true}
            disableSearchIcon={true}
            onChange={setNoHal}
          />
        </div>
        {/* {value} */}
        <button type="submit" id="btnSubmit" className="ui button blue">
          <i className="user plus icon"></i>
          Add
        </button>
      </form>
      {/* <script src={script}></script> */}
    </div>
  );
}
