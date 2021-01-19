import React from "react";

function FullList(props) {
  return (
    <div className="text-center">
      <h1>Employee Directory</h1>
      <h3>Name: {props.name}</h3>
    </div>
  );
}

export default FullList;
