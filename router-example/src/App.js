import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class User extends React.Component {
  render() {
    return <h1> Welcome User <b>{this.props.match.params.username}</b> </h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.updateChange = this.updateChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  updateChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleStart = (props) => {
    if (this.state.username.length > 0) {
      props.history.push(`/user/${this.state.username}`);
    }
  };

  render() {
    return (
      <Router>
        <div className="box">
          <div className="user">
            <Route
              path="/"
              exact
              render={(props) => {
                return (
                  <div>
                    <h1> Welcome </h1>
                    <input
                      type="text"
                      id="username"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.updateChange}
                    />

                    <input
                      type="submit"
                      value="Start"
                      onClick={() => this.handleStart(props)}
                    />
                  </div>
                );
              }}
            />

            <Route path="/user/:username" exact component={User} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
