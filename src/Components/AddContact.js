import React, { Component } from "react";
// import Alert from "./Alert";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    no: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      (this.state.email === "" && this.state.no === "")
    ) {
      this.props.showAlert(true, "Error", "Please fill all the fields");
      console.log("Please fill all the fields");
      return;
    }
    if (this.state.email === "") this.state.email = "no@mail";
    if (this.state.no === "") this.state.no = "0000000000";
    console.log(this.state);

    // if (no === "") no = "0000000000";
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", no: "" });
  };

  render() {
    // (".message .close").on("click", function () {
    //   (this).closest(".message").transition("fade");
    // });
    // const close = () => {
    //   console.log("close");
    //   document.querySelector(".message").style.display = "none";
    // };

    return (
      <div className="ui main" style={{ width: "auto" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Add Contact
        </h1>
        <div class="ui divider"></div>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              name="mail"
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              value={this.state.no}
              onChange={(e) => this.setState({ no: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
