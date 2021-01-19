import React, { Component } from "react";
import Container from "./Container";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import FullList from "./FullList";

class List extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies();
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <FullList
          name={this.state.result[0]}
        />
        <SearchForm />
      </Container>
    );
  }
}

export default List;
