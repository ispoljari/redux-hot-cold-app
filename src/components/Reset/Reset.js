import React from 'react';
import { Button } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const Reset = ({ resetGame }) => (
  <div>
    <Button 
      variant="danger" 
      width={1} 
      mt={10} 
      minHeight={40} 
      fontSize={22} 
      type="button" 
      onClick={resetGame}
    >
        Reset Game
    </Button>
  </div>
);

Reset.propTypes = {
  resetGame: PropTypes.func.isRequired,
}

export default Reset;