import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../css/login.css";
import { Button, FormGroup, Label } from "reactstrap";
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const required = (value) => {
  if (!value.toString().trim().length) {
    return (
      <span
        style={{
          color: "red",
          fontSize: "0.8rem",
        }}
      >
        Invalid Email !!
      </span>
    );
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <span
        style={{
          color: "red",
          fontSize: "0.8rem",
        }}
      >
        Invalid Email !!
      </span>
    );
  }
};

const password = (value, props, components) => {
  if (value.length < 5) {
    return (
      <span
        style={{
          color: "red",
          fontSize: "0.8rem",
        }}
      >
        Weak Password !!
      </span>
    );
  }
};

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
    if (
      this.state.email === "admin@gmail.com" &&
      this.state.password === "admin"
    ) {
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
      <div className="main-login-body">
        <Form>
          <div className="login-form">
            <h6
              style={{
                color: "black",
              }}
            >
              email: admin@gmail.com
            </h6>
            <h6
              style={{
                color: "black",
              }}
            >
              password: admin
            </h6>
            <div className="formBody">
              <div className="formGroup">
                <FormGroup>
                  <Label for="exampleEmail" className="altColor">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Enter your email..."
                    validations={[required, email]}
                    className="login-input"
                  />
                </FormGroup>
              </div>
              <div>
                <div className="formGroup">
                  <FormGroup>
                    <Label for="examplePassword" className="altColor">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="Enter your password..."
                      validations={[required, password]}
                      className="login-input"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Button onClick={this.handleLogin} className="login-button">
                  Login
                </Button>
              </div>
              <div className="regSection">
                <label className="altColor">New User?</label>
                <Link to="/registration" className="registerBtn">
                  Register now
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
