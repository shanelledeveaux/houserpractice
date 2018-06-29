import React, { Component } from "react";
import "./Wizard.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateUserState,
  updateZip
} from "../../ducks/reducer";

class Wizard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     address: "",
  //     city: "",
  //     userState: "",
  //     zipcode: ""
  //   };
  // }

  // handleName = e => {
  //   this.setState({ name: e.target.value });
  // };

  // handleAddress = e => {
  //   this.setState({ address: e.target.value });
  // };

  // handleCity = e => {
  //   this.setState({ city: e.target.value });
  // };

  // handleState = e => {
  //   this.setState({ userState: e.target.value });
  // };

  // handleZip = e => {
  //   this.setState({ zipcode: e.target.value });
  // };

  // submitListing = e => {
  //   axios
  //     .post("/api/newhouse", {
  //       name: this.state.name,
  //       address: this.state.address,
  //       city: this.state.city,
  //       userState: this.state.userState,
  //       zipcode: this.state.zipcode
  //     })
  //     .then(response => {
  //       console.log(response);
  //     });
  // };

  render() {
    console.log("WIZARD 1 PROPS", this.props.name);
    const {
      updateName,
      updateAddress,
      updateCity,
      updateUserState,
      updateZip
    } = this.props;
    return (
      <div className="wizard">
        <div className="title">Add New Listing</div>
        <div className="form">
          Name:
          <input onChange={e => updateName(e.target.value)} />
          Address:
          <input onChange={e => updateAddress(e.target.value)} />
          City:
          <input onChange={e => updateCity(e.target.value)} />
          State:
          <input onChange={e => updateUserState(e.target.value)} />
          Zipcode:
          <input onChange={e => updateZip(e.target.value)} />
          <div>
            <Link to="/wizard2">
              <button>Next</button>
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

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateUserState,
    updateZip
  }
)(Wizard);
