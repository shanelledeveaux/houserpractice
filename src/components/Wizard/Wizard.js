import React, { Component } from "react";
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

  render() {
    console.log("WIZARD STATE", this.state);
    return (
      <div>
        <div>Add New Listing</div>
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
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
