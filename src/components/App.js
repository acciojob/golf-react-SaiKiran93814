import React, { Component } from 'react';
import '../styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      ballPosition: 0,
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.start) {
      // ArrowRight key
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  buttonClickHandler() {
    this.setState({ start: true });
  }

  renderChoice() {
    if (!this.state.start) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px`, position: 'relative' }}
        ></div>
      );
    }
  }

  render() {
    return (
      <div className="golf-game">
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
