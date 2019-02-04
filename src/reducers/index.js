import * as actions from '../actions';
import { generateRandomNumber, getFeedback } from '../util';

const initialState = {
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  feedbackMessage: 'Waiting...',
  block: false
};

updateAppState = e => {
  e.preventDefault();

  if (!this.props.block) {
    const guess = e.target.elements.guess.value;
    e.target.elements.guess.value = ''; // Clear input field after submit

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
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.SUBMIT_GUESS) {

  }

  return state;
}