import React from 'react';
import PropTypes from 'prop-types';

import { Banner, Feedback, Form, Progress, Reset, Info, Author } from './components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './style';

const App = ({ state, submitGuess, resetGame }) => { 
  const { allGuesses, feedbackMessage, block, guess } = state;
  const attempt = allGuesses.length;

  const guessList = allGuesses.map((item, index) => 
    <Styled.ListItem 
      key={index} 
      color={item.feedbackColor}
    >
      <span>
        {item.guess}
      </span>
    </Styled.ListItem>
  );

  return (
    <Grid 
      mt={20}
    >
      <Row>
        <Col>
          <Styled.LandmarkContainer 
            as="header" 
            role="banner"
          >
            <Banner />
          </Styled.LandmarkContainer>
        </Col>
      </Row>
      <Row 
        mt={10}
      >
        <Col>
          <Styled.LandmarkContainer 
            as="main" 
            role="main"
          >
            <Feedback 
              feedback={feedbackMessage}
            />
            <Form 
              block = {block} 
              onSubmit={submitGuess}
            />
            <Progress 
              attempt={attempt} 
              guess={guess} 
              guessList={guessList}
            />
            <Reset 
              resetGame = {resetGame}
            />
            <Info />
          </Styled.LandmarkContainer>
        </Col>
      </Row>
      <Row 
        mt={30}
      >
        <Col>
          <Styled.LandmarkContainer 
            as="footer" 
            role="contentinfo"
          >
            <Author />
          </Styled.LandmarkContainer>
        </Col>
      </Row>
    </Grid>
  );
}

App.propTypes = {
  state: PropTypes.shape({
    allGuesses: PropTypes.arrayOf(
      PropTypes.shape({
        guess: PropTypes.string.isRequired,
        feedbackColor: PropTypes.string.isRequired
      })
    ),
    feedbackMessage: PropTypes.string.isRequired, 
    block: PropTypes.bool.isRequired, 
    guess: PropTypes.string
  })
};

App.defaultProps = {
  state: PropTypes.shape({
    guess: ''
  })
}


export default App;