import Users from "./Components/userCard";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <div className="Main_div">
          {/* <nav class="navbar navbar-expand-lg "> */}
          <h1>Hey There!</h1>
          <h6>Click below to view our Employee</h6>
          <button class="btn btn-success butn" onClick={this.updateState}>
            <h3>Employee</h3>
          </button>
          {/* </nav> */}
        </div>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </div>
    );
  }
}

export default App;
