import React, { Component } from "react";
import "./App.css";
import Templater from "./components/templater/Templater";
import debug from "sabio-debug";
import { BrowserRouter, Route } from "react-router-dom";
import * as userService from "./services/userService";
const _logger = debug.extend("App");

class App extends Component {
  state = {
    user: {
      id: 1165,
      name: "Dave",
      roles: null,
      tenantId: "6001",
      siteId: 0,
    },
    userById: {
      id: 1165,
      firstName: "Dave",
      lastName: "Hobby",
      email: "melanie@mel.com",
      avatarUrl: "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
      isConfirmed: true,
      dateCreated: "2020-04-23T22:20:40.0466667Z",
      dateModified: "2020-04-23T22:20:40.0466667Z",
      lastModifiedBy: null,
    },
    loggedIn: { status: false },
  };

  componentDidMount() {
    _logger("componentDidMount");
    userService
      .getUser()
      .then(this.onSuccessGetUser)
      .then(userService.getUserById)
      .then(this.onSuccessGetUserById)
      .catch(this.onErrorGetUser);
    _logger("componentDidMount end");
  }

  onSuccessGetUser = (response) => {
    _logger("Success Getting User", response);
    // insert set state here
    this.setState((prevState) => {
      var currentUser = { ...prevState.user };
      var currentLoggedIn = { ...prevState.loggedIn };
      currentUser = response.data.item;
      currentLoggedIn = { status: true };
      return { user: currentUser, loggedIn: currentLoggedIn };
    });

    return response.data.item.id;
  };

  onErrorGetUser = (error) => {
    _logger("Error Getting User", error);

    return Promise.reject(error);
  };

  onSuccessGetUserById = (response) => {
    _logger("Success Getting User", response);
    this.setState((prevState) => {
      var currentUserById = { ...prevState.userById };
      currentUserById = response.data.item;
      return { userById: currentUserById };
    });
  };

  render() {
    _logger("App is running.");
    return (
      <React.Fragment>
        <BrowserRouter>
          <main role="main">
            <Route exact path="/" component={Templater}></Route>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
