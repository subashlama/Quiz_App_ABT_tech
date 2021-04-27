import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h4 className="dashboard-description">
          {" "}
          Welcome to Quiz App. The Quiz includes 10 multiple choice questions from multiple fields.
          At the end of this test, you will be given your score. Hope you enjoy it.{" "}
        </h4>
        <Link to="/questions" className="dashboard-start">
          Start
        </Link>
      </div>
    );
  }
}
