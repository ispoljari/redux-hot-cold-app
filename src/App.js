import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitGuess } from './actions';

import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './style';

export class App extends Component { 
  // resetGame = () => this.setState(getInitialState());

  submitGuess = e => {
    e.preventDefault();

    if (!this.props.block) {
      this.props.dispatch(submitGuess(e.target.elements.guess.value));
      e.target.elements.guess.value = '';
    }
  }

  render() {
    const { allGuesses, feedbackMessage, block, guess } = this.props;
    const attempt = allGuesses.length;

    const guessList = allGuesses.map((item, index) => 
      <Styled.ListItem key={index} color={item.feedbackColor}>
        <span>{item.guess}</span>
      </Styled.ListItem>
    );

    return (
      <Grid mt={20}>
        <Row>
          <Col>
            <Styled.LandmarkContainer as="header" role="banner">
              <Banner />
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={10}>
          <Col>
            <Styled.LandmarkContainer as="main" role="main">
              <Feedback feedback={feedbackMessage}/>
              <Form block = {block} onSubmit={this.submitGuess}/>
              <Progress attempt={attempt} guess={guess} guessList={guessList}/>
              <Reset resetGame = {this.resetGame}/>
              <Info />
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={15}>
          <Col>
            <Styled.LandmarkContainer as="footer" role="contentinfo">
              <Author />
            </Styled.LandmarkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  actual: state.actual,
  guess: state.guess,
  allGuesses: state.allGuesses,
  feedbackMessage: state.feedbackMessage,
  block: state.block
});

export default connect(mapStateToProps)(App);