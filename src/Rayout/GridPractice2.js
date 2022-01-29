import React from 'react';
import { Grid } from '@mui/material';

function GridPractice2() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <div>xs=6 md=8</div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>xs=6 md=4</div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>xs=6 md=4</div>
      </Grid>
      <Grid item xs={6} md={8}>
        <div>xs=6 md=8</div>
      </Grid>
    </Grid>
  );
}

export default GridPractice2;
