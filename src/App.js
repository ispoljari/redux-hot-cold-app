import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { getFeedback } from './util';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './style';

export class App extends Component { 
  // resetGame = () => this.setState(getInitialState());

  updateAppState = guess => {
    const { actual } = this.state;
    const absDiff = Math.abs(guess - actual);
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    this.setState(prevState => ({
        guess,
        allGuesses: [...prevState.allGuesses, {guess, feedbackColor}],
        feedbackMessage,
        block: absDiff === 0
      })
    ); 
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
              <Form block = {block} returnGuessToApp={value => this.updateAppState(value)}/>
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