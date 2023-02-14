import React, { memo } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Container from '../others/container';
import SociaIcons from '../../assets/social-icons.png';
import LexSmallLogo from '../../assets/lex-small-logo.png';
import './style.css';
import RightArrow from '../../assets/right-arrow.png';

const Footer = () => {
  return (
    <Container>
      <Grid container>
        <Typography className="footer_heading">
          В одном шаге от lex...
        </Typography>
        <Grid item xs={12}>
          <input placeholder="Фио:" className="footer_inputs" />
        </Grid>
        <Grid item xs={12}>
          <input placeholder="E-mail:" className="footer_inputs" />
        </Grid>
        <Grid item xs={12}>
          <input placeholder="контактный номер:" className="footer_inputs" />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <input placeholder="род деятельности:" className="footer_inputs" />
          <Box className="right_arrow_box center">
            <img src={RightArrow} />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="footer_bottom_bar">
          <img src={SociaIcons} className="socialIcons_image" />
          <img src={LexSmallLogo} className="lexSmallLogo_image" />
          <Typography className="est2022">est. 2022</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default memo(Footer);
