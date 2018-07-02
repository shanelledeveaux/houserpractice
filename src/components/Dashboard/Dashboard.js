import React, { Component } from "react";
import "./Dashboard.css";
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

  deleteHouses(id) {
    axios
      .delete(`/api/houses/${id}`)
      // .then(response => {
      //   console.log(response);
      // })
      .then(this.getHouses());
  }

  render() {
    console.log(this.state);
    const home = this.state.houses.map((e, i) => {
      return (
        <House
          key={i}
          id={e.house_id}
          propertyname={e.propertyname}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
          imageurl={e.imageurl}
          rent={e.rent}
          mortgage={e.mortgageamt}
          deleteHouses={this.deleteHouses}
        />
      );
    });
    return (
      <div className="dashboard">
        <div className="dashtitle">
          Listings
          <Link to="/wizard">
            <button>Add New</button>
          </Link>
        </div>
        <div className="homebox">{home}</div>
      </div>
    );
  }
}

export default Dashboard;
