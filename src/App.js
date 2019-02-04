import React from 'react';

import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './style';

const App = ({ state, submitGuess, resetGame }) => { 
  const { allGuesses, feedbackMessage, block, guess } = state;
  const attempt = allGuesses.length;

  const onSubmit = e => {
    e.preventDefault();
    if (!block) { 
      submitGuess(e.target.elements.guess.value);
      e.target.elements.guess.value = '';
    }
  }

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
            <Form block = {block} onSubmit={onSubmit}/>
            <Progress attempt={attempt} guess={guess} guessList={guessList}/>
            <Reset resetGame = {resetGame}/>
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


export default App;