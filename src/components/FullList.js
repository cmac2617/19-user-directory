import React from "react";

function FullList(props) {
  return (
    

      <ul className="list-group">
      {props.name.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
);
      

}

export default FullList;
