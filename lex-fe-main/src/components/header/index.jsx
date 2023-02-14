import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import './style.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Container from '../others/container';

const Header = () => {
  return (
    <Grid container className="header_main_container center">
      <Container className="center">
        <Grid container>
          <Grid item xs={0} sm={9} className="header_main">
            <Typography className="header_links">О нас</Typography>
            <Typography className="header_links">мероприятия</Typography>
            <Typography className="header_links">образование</Typography>
            <Typography className="header_links">ПЕРСПЕКТИВЫ</Typography>
            <Typography className="header_links">контакты</Typography>
          </Grid>
          <Grid item xs={12} sm={3} className="header_main_drawer">
            <DensityMediumIcon
              style={{ cursor: 'pointer', marginRight: '30px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export default memo(Header);
