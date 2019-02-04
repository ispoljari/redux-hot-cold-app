import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@smooth-ui/core-sc';
import * as Styled from './Feedback.style';

const Feedback = ({ feedback }) =>  (
  <Styled.Feedback>
    <Typography 
      variant="h2" 
      fontSize={22} 
      textAlign="center" 
      my={0} 
      mx="auto"
    > 
      {feedback}
    </Typography>
  </Styled.Feedback>
);

Feedback.propTypes = {
  feedback: PropTypes.string.isRequired,
};

export default Feedback;