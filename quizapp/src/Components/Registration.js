import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      address: "",
      contact: "",
      registration: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleRegister = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        registration: true,
      });
    }
  };
  render() {
    if (this.state.registration) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="userBody">
        <Form>
          <FormGroup>
            <Label for="exampleName" className="altColor">Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleName"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress" className="altColor">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleContact" className="altColor">Contact</Label>
            <Input
              type="text"
              name="contact"
              id="exampleContact"
              value={this.state.contact}
              onChange={this.handleChange}
              placeholder="Contact"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" className="altColor">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </FormGroup>
          <Button onClick={this.handleRegister}>Register</Button>
          <div className="regSection">
            <Link to="/" className="registerBtn">
              Login
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
