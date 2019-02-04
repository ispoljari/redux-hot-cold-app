export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME,
});