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
  updateMortgage,
  updateRent,
  submitHouse
} from "../../ducks/reducer";

class Wizard3 extends Component {
  render() {
    console.log("WIZARD 3 PROPS", this.props);
    const {
      name,
      address,
      city,
      userState,
      zipcode,
      imageurl,
      mortgage,
      rent
    } = this.props;
    return (
      <div className="wizard">
        <div className="title">Add Rent</div>
        <div className="form">
          Monthly Mortgage:
          <input onChange={e => updateMortgage(e.target.value)} />
          {/* <div>Recommended Rent: ${updateMortgage * 1.25}</div> */}
          Desired Rent:
          <input onChange={e => updateRent(e.target.value)} />
        </div>
        <Link to="/">
          <button
            onClick={e =>
              submitHouse(
                name,
                address,
                city,
                userState,
                zipcode,
                imageurl,
                mortgage,
                rent
              )
            }
          >
            Complete
          </button>
        </Link>
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
    updateMortgage,
    updateRent,
    submitHouse
  }
)(Wizard3);
