import React, { Component, useEffect } from "react";

import Filter from "./Filter";

import { useState, UseEffect } from "react";

function List() {
  const [users, setUsers] = useState([])
  useEffect(() => {

    fetch('https://randomuser.me/api/?results=100')
      .then((data => data.json()))
      .then((data => setUsers(data.results)))
  }, [])

  function Male() {
    useState(() => {
      fetch('https://randomuser.me/api/?results=5')
      .then((data => data.json()))
      .then((data => setUsers(data.results))) 
    })

    return (
      <div>
      <Filter></Filter>
      {users.map((each, index) => {
			return(
				<p key={index}>{each.name.first} {each.name.last}</p>
			)
		})}
    </div>
    )
  }

  return (
    <div>
      <Filter></Filter>
      {users.map((each, index) => {
			return(
				<p key={index}>{each.name.first} {each.name.last}</p>
			)
		})}
    </div>
  )
}
  
export default List;
