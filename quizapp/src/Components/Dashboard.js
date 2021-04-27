import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h4 className="dashboard-description">
          {" "}
          Welcome to Quiz App. Here we will ask you 10 multiple choice questions
          and give you feedback. Hope you enjoy it.{" "}
        </h4>
        <Link to="/questions" className="dashboard-start">
          Start
        </Link>
      </div>
    );
  }
}
