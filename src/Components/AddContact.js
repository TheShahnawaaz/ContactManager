import React, { Component } from "react";
// import Alert from "./Alert";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      this.props.showAlert(true, "Error", "Please fill all the fields");
      console.log("Please fill all the fields");
      return;
    }
    // console.log(this.state);
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
