import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "../House/House";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios
      .get("/api/houses")
      .then(results => this.setState({ houses: results.data }));
  }

  render() {
    const home = this.state.houses.map((e, i) => {
      return (
        <House
          key={i}
          propertyname={e.propertyname}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
        />
      );
    });
    return (
      <div>
        <Link to="/wizard">
          <button>Add New</button>
        </Link>
        {home}
      </div>
    );
  }
}

export default Dashboard;
