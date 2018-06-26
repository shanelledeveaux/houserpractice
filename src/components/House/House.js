import React from "react";

const House = props => {
  console.log("HOUSE PROPS", props);
  return (
    <div>
      <div>{props.propertyname}</div>
      <div>{props.address}</div>
      <div>{props.city}</div>
      <div>{props.state}</div>
      <div>{props.zip}</div>
    </div>
  );
};

export default House;
