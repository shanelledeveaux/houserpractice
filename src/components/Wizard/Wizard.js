import React, { Component } from "react";
import "./Wizard.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      userState: "",
      zipcode: ""
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleAddress = e => {
    this.setState({ address: e.target.value });
  };

  handleCity = e => {
    this.setState({ city: e.target.value });
  };

  handleState = e => {
    this.setState({ userState: e.target.value });
  };

  handleZip = e => {
    this.setState({ zipcode: e.target.value });
  };

  submitListing = e => {
    axios
      .post("/api/newhouse", {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        userState: this.state.userState,
        zipcode: this.state.zipcode
      })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    // console.log("WIZARD STATE", this.state);
    return (
      <div className="wizard">
        <div className="title">Add New Listing</div>
        <div className="form">
          Name:
          <input value={this.state.name} onChange={this.handleName} />
          Address:
          <input value={this.state.address} onChange={this.handleAddress} />
          City:
          <input value={this.state.city} onChange={this.handleCity} />
          State:
          <input value={this.state.userState} onChange={this.handleState} />
          Zipcode:
          <input value={this.state.zipcode} onChange={this.handleZip} />
          <div>
            <Link to="/">
              <button onClick={this.submitListing}>Submit</button>
            </Link>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
