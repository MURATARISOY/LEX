import React, { memo } from 'react';
import { Box } from '@mui/system';

const Container = ({ children }) => {
  return (
    <Box
      style={{
        maxWidth: '1350px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children}
    </Box>
  );
};
export default memo(Container);
