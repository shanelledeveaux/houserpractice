import React, { Component } from "react";
import "./Wizard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImage } from "../../ducks/reducer";

class Wizard2 extends Component {
  render() {
    console.log("WIZARD 2 PROPS", this.props);
    const { updateImage } = this.props;
    return (
      <div className="wizard">
        <div className="title">Update Image</div>
        {/* <img src={updateImage} /> */}
        <div className="form2">
          Image URL:
          <input onChange={e => updateImage(e.target.value)} />
        </div>
        <Link to="/wizard3">
          <button>Next</button>
        </Link>
        <Link to="/wizard">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateImage }
)(Wizard2);
