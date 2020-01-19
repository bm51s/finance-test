import React from "react";

import axios from "axios";

import Name from "./Name";

export default class App extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    var company = this.props.company;
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      var test = res.data;
      this.setState({ persons: test });
      console.log(res);
      console.log(company);
      console.log(test);
      console.log(this.state.persons[0].name);
    });
  }

  render() {
    return (
      <>
        {this.state.persons.map(z => (
          <Name zzz={z.name} />
        ))}
      </>
    );
  }
}
