import React, { Component } from "react";
import "./Wizard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateUserState,
  updateZip,
  updateImage,
  // updateMortgage,
  // updateRent,
  submitHouse
} from "../../ducks/reducer";

class Wizard3 extends Component {
  state = {
    rent: 0,
    mortgage: 0
  };

  update = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitDone = () => {
    const { name, address, city, userState, zipcode, imageurl } = this.props;
    this.props
      .submitHouse(
        name,
        address,
        city,
        userState,
        zipcode,
        imageurl,
        this.state.mortgage,
        this.state.rent
      )
      .then(() => (window.location.href = "/"));
  };

  render() {
    console.log("WIZARD 3 PROPS", this.props, this.state);
    return (
      <div className="wizard">
        <div className="title">Add Rent</div>
        <div className="form">
          Monthly Mortgage:
          <input
            onChange={this.update}
            value={this.state.mortgage}
            name="mortgage"
          />
          {/* <div>Recommended Rent: ${updateMortgage * 1.25}</div> */}
          Desired Rent:
          <input onChange={this.update} value={this.state.rent} name="rent" />
        </div>

        <button onClick={() => this.submitDone()}>Complete</button>

        <Link to="/wizard2">
          <button>Back</button>
        </Link>
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
    updateZip,
    updateImage,
    // updateMortgage,
    // updateRent,
    submitHouse
  }
)(Wizard3);
