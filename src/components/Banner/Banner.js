import React from 'react';

import { Typography } from '@smooth-ui/core-sc';

const Banner = React.memo(() => (
  <Typography 
    variant="h1" 
    textAlign="center" 
    m={0}
  >
    HOT or COLD
  </Typography>
));

export default Banner;