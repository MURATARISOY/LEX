import React, { memo } from 'react';
import { Grid, Box, Button } from '@mui/material';
import BG1 from '../../assets/background1.png';
import BG2 from '../../assets/background2.png';
import './style.css';
import Header from '../../components/header';
import LexLogo from '../../assets/lex-logo.png';
import Container from '../../components/others/container';
import CountriesText from '../../components/countriesText';
import TwoBoxes from '../../components/twoBoxes';
import JoinUsImage from '../../assets/joinus-image.png';
import Footer from '../../components/footer';

const Landingpage = () => {
  return (
    <React.Fragment>
      <Grid
        container
        style={{
          background: `linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.6)), url(${BG1})`,
        }}
        className="main_banner"
      >
        <Header />
        <Container>
          <Grid container>
            <Grid item xs={12} className="lex_logo_grid center">
              <img src={LexLogo} className="lex_logo_image" />
            </Grid>
            <Grid item xs={12} className="center">
              <Button className="banner_button">Вступить</Button>
            </Grid>
          </Grid>
        </Container>
        <CountriesText />
      </Grid>
      <Grid className="black_bg_grid">
        <TwoBoxes />
      </Grid>
      <Grid className="black_bg_grid center">
        <img
          src={JoinUsImage}
          style={{ marginTop: '70px' }}
          className="joinus_image"
        />
      </Grid>
      <Grid
        style={{
          background: `linear-gradient(rgba(0,0,0,1), rgba(0, 0, 0, 0)), url(${BG2})`,
          paddingTop: '200px',
        }}
        className="footer_main_grid"
      >
        <Footer />
      </Grid>
    </React.Fragment>
  );
};
export default memo(Landingpage);
