import { Grid, Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import Container from '../others/container';
import './style.css';

const TwoBoxes = () => {
  return (
    <Container>
      <Grid container className="two_grids_main_grid">
        <Grid item xs={12} sm={5.5} className="two_grids">
          <Typography className="two_grids_heading">Кто мы?</Typography>
          <Typography className="two_grids_text">
            Мы – уникальное творческое сообщество. Наша цель – дать максимальное
            развитие и рост людям из креативных индустрий через сильное
            окружение и инновационные технологии.
            <br />
            <br />
            Наш основной тезис – «Окружение – сестра таланта».
            <br /> Мы убеждены, что самый эффективный рост в любом деле
            происходит из-за правильных людей вокруг нас, поэтому первостепенно
            предоставляем такой инструмент, как качественное окружение
            единомышленников.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5.5} className="two_grids">
          <Typography className="two_grids_heading">Для кого мы?</Typography>
          <Typography className="two_grids_text">
            <ul>
              <li>креативные предприниматели</li>
              <li>фотографы, видеографы, продюсеры, съёмок</li>
              <li>дизайнеры одежды, стилисты</li>
              <li>художники, nft деятели</li>
              <li>музыкальные продюсеры и артисты</li>
              <li>режиссёры</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default memo(TwoBoxes);
