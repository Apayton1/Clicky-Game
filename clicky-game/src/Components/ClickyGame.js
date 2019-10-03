import React, { Component } from 'react';
import Navbar from "./NavBar";
import Container from './Container';
import Banner from './Banner';
import images from '../images';
import Footer from './Footer';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    navTextColor: '',
    navText: 'Click an Image!',
    allCharacters: this.shuffleArray(),
    wasClicked: [],
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);


  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];

    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
    }
    return shuffleArr;
  }

  checkClicked(clickedCard) {
    const initialState = this.state.wasClicked.slice();
    const shuffled = this.shuffleArray();
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.wasClicked.includes(clickedCard)) {
      if (score === highScore) {
        score++;
        highScore++;

      } else {
        score++;
      }
      initialState.push(clickedCard);
    }

    if (this.state.wasClicked.includes(clickedCard)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navTextColor: 'incorrect',
        navText: 'Try again!',
        allCharacters: shuffled,
        wasClicked: [],
        shake: true
      });
    }


    this.setState({
      score: score,
      highScore: highScore,
      navTextColor: 'correct',
      navText: 'Great Guess!',
      allCharacters: shuffled,
      wasClicked: initialState,
      shake: false
    });
    return setTimeout(() => this.setState({ navTextColor: '' }), 500);
  }

    render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navText={state.navText}
          navTextColor={state.navTextColor}
        />
        <Banner />
        <Container
          shake={state.shake}
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ClickyGame;