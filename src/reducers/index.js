import { generateRandomNumber } from '../util';

const initialState = {
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  indicator: 'I\'m here man',
  block: false
};

export const hotColdReducer = (state=initialState, action) => {
  return state;
}