import React from "react";
import "./House.css";

const House = props => {
  console.log("HOUSE PROPS", props);
  return (
    <div className="house">
      <div>Name: {props.propertyname}</div>
      <div>Address: {props.address}</div>
      <div>City: {props.city}</div>
      <div>State: {props.state}</div>
      <div>Zip: {props.zip}</div>
      <button
        onClick={() => {
          props.deleteHouses(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default House;
