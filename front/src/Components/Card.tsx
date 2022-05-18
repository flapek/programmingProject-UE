import {
  Card as CardMui,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { Info } from '../Types';

export default function Card({ data }: { data: Info }) {
  return (
    <React.Fragment>
      <CardMui sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ width: 250 }}
          image="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_8_8_14_34_922_00.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardMui>
    </React.Fragment>
  );
}
