import { connect } from 'react-redux';

import App from './App';
import { submitGuess, resetGame } from './actions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitGuess: e => {
    e.preventDefault();

    if (!ownProps.block) { 
      dispatch(submitGuess(e.target.elements.guess.value));
      e.target.elements.guess.value = '';
    }
  },
  resetGame: () => dispatch(resetGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);