import { connect } from 'react-redux';

import App from './App';
import { submitGuess, resetGame } from './actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  submitGuess: guess => dispatch(submitGuess(guess)),
  resetGame: () => dispatch(resetGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);