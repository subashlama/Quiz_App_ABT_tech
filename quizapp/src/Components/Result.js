import React, { Component } from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";

export default class Result extends Component {
  constructor(props) {
    super(props);
    if (props.history.location.state) {
      this.state = {
        restart: false,
        sub: props.history.location.state.score,
      };
    } else {
      this.state = {
        restart: true,
      };
    }
  }
  handleNext = () => {
    this.setState({
      restart: true,
    });
  };
  render() {
    if (this.state.restart) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Your Score is: </span>
              </div>
              <div className="question-count">
                <span>{this.state.sub} / 10 </span>
              </div>
            </div>
          </>
        </div>
        <div className="submitAnswer">
          <Button
            color="primary"
            className="submitButton"
            onClick={this.handleNext}
          >
            Restart
          </Button>
        </div>
      </div>
    );
  }
}
