import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/login.css"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.email === "admin" && this.state.password === "admin") {
      this.setState({
        loggedIn: true,
      });
    }
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail"  className="altColor">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" className="altColor">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter your password..."
            />
          </FormGroup>
          <Button onClick={this.handleLogin}>Login</Button>
          <div className="regSection">
            <label className="altColor">New User?</label>
            <Link to="/registration" className="registerBtn">
              Register now
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
