import { Grid } from '@mui/material';
import React from 'react';

function GridPractice() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
    </Grid>
  );
}

export default GridPractice;
