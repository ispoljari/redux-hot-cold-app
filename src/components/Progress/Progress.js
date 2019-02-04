import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@smooth-ui/core-sc';
import * as Styled from './Progress.style';

const Progress = ({ attempt, guessList }) => (
  <Styled.Progress>
    <Typography 
      variant="h2" 
      textAlign="center" 
    >
      Guess #{attempt}
    </Typography>
    <Styled.History>
      {guessList}
    </Styled.History>
  </Styled.Progress>
);

Progress.propTypes = {
  attempt: PropTypes.number.isRequired,
  guessList: PropTypes.arrayOf(String)
}

export default Progress;