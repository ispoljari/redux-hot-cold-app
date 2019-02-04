import * as actions from '../actions';
import { generateRandomNumber, getFeedback } from '../util';

const initialState = {
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  feedbackMessage: 'Waiting...',
  block: false
};

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.SUBMIT_GUESS) {
    const { actual } = state;
    const absDiff = Math.abs(action.guess - actual);
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    return Object.assign({}, state, {
      guess: action.guess,
      allGuesses: [...state.allGuesses, {
        guess: action.guess,
        feedbackColor,
      }],
      feedbackMessage,
      block: absDiff === 0
    });

  }

  return state;
}