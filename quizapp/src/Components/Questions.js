import React, { Component } from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import "../css/questions.css";
import shuffle from 'shuffle-array';

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      score: 0,
      showResult: false,
      receivedAnswerCorrect: false,
      nextQuestion: false,
      showAnswer: "",
      questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: shuffle([
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ]),
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: shuffle([
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ]),
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: shuffle([
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ]),
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: shuffle([
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ]),
        },
        {
          questionText: "Blood is filtered by which pair of organs?",
          answerOptions: shuffle([
            { answerText: "Heart", isCorrect: false },
            { answerText: "Kidneys", isCorrect: true },
            { answerText: "Liver", isCorrect: false },
            { answerText: "Pancreas", isCorrect: false },
          ]),
        },
        {
          questionText: "Who developed the theory of relativity?",
          answerOptions: shuffle([
            { answerText: "Nikola Tesla", isCorrect: false },
            { answerText: "Albert Einstein", isCorrect: true },
            { answerText: "Thomas Edision", isCorrect: false },
            { answerText: "Issac Newton", isCorrect: false },
          ]),
        },
        {
          questionText: "In which country is Mount Everest?",
          answerOptions: shuffle([
            { answerText: "Nepal", isCorrect: true },
            { answerText: "Canada", isCorrect: false },
            { answerText: "Japan", isCorrect: false },
            { answerText: "Norway", isCorrect: false },
          ]),
        },
        {
          questionText: "Which is the largest bird alive?",
          answerOptions: shuffle([
            { answerText: "Kiwi", isCorrect: false },
            { answerText: "Penguin", isCorrect: false },
            { answerText: "Ostrich", isCorrect: true },
            { answerText: "Sparrow", isCorrect: false },
          ]),
        },
        {
          questionText: "Who discovered radium?",
          answerOptions: shuffle([
            { answerText: "The Curies", isCorrect: true },
            { answerText: "Alan Turing", isCorrect: false },
            { answerText: "J.R. Oppenheimer", isCorrect: false },
            { answerText: "Lucas Changretta", isCorrect: false },
          ]),
        },
        {
          questionText: "How many teeth does a horse have?",
          answerOptions: shuffle([
            { answerText: "32", isCorrect: false },
            { answerText: "40", isCorrect: true },
            { answerText: "28", isCorrect: false },
            { answerText: "16", isCorrect: false },
          ]),
        },
      ],
    };
  }

  handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      this.setState({
        receivedAnswerCorrect: true,
      });
    }
  };
  handleSubmit = () => {
    if (this.state.receivedAnswerCorrect === false) {
      this.setState({
        showAnswer: "Oops! Wrong Answer...",
      });
    } else {
      this.setState({
        showAnswer: "Correct!!!",
        score: this.state.score + 1,
      });
    }
    this.setState({
      nextQuestion: true,
    });
  };
  handleNext = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questions.length) {
      this.setState({
        currentQuestion: nextQuestion,
      });
    } else {
      this.setState({
        showResult: true,
      });
    }
    this.setState({
      receivedAnswerCorrect: false,
      nextQuestion: false,
      showAnswer: "",
    });
  };

  render() {
    if (this.state.showResult) {
      return (
        <Redirect
          to={{
            pathname: "/result",
            search: "?query=abc",
            state: { score: this.state.score },
          }}
        />
      );
    }
    return (
      <div>
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {this.state.currentQuestion + 1}</span>/
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    this.handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  className="answerButton"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        </div>
        <div className="submitAnswer">
          <div className="showResult">
            <h6 className="altColor">{this.state.showAnswer}</h6>
          </div>

          {this.state.nextQuestion === true ? (
            <Button
              color="primary"
              className="submitButton"
              onClick={this.handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              color="primary"
              className="submitButton"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    );
  }
}
