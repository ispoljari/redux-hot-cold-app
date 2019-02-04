import { generateRandomNumber } from './util';

const initialState = {
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  feedbackMessage: 'Waiting...',
  block: false
};

export const hotColdReducer = (state=initialState, action) => {
  return state;
}