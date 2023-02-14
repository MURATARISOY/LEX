import { Grid, Box, Typography } from '@mui/material';
import { memo } from 'react';
import './style.css';
import Container from '../others/container';
import CircleIcon from '@mui/icons-material/Circle';

const CountriesText = () => {
  return (
    <Container>
      <Grid container style={{ paddingBottom: '30px' }}>
        <Grid item xs={12}>
          <Box className="countries_text_main_grid">
            <Typography className="countries_text_points">uae</Typography>
            <Typography className="countries_text_points">
              <CircleIcon style={{ fontSize: 18 }} />
            </Typography>
            <Typography className="countries_text_points">Russia</Typography>
            <Typography className="countries_text_points">
              <CircleIcon style={{ fontSize: 18 }} />
            </Typography>
            <Typography className="countries_text_points">bali</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography className="countries_text">
            Международный закрытый бизнес-клуб премиального уровня,
            направленный на финансовое развитие людей из креативных сфер.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default memo(CountriesText);
