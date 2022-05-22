import {
  Card as CardMui,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import React from 'react';
import { Chart } from '.';
import { Product } from '../Types';

export default function Card({
  product,
  handleClickOpen,
}: {
  product: Product;
  handleClickOpen: (product: Product) => void;
}) {
  const price = `Price: ${product.Prices.at(-1)
    ?.Value.toString()
    .replace('.', ',')} PLN`;

  const specification = () => {
    return product.Specification.forEach((value, key) => (
      <Grid key={key}>
        {key} | {value}
      </Grid>
    ));
  };

  return (
    <React.Fragment>
      <Button
        component={CardMui}
        sx={{ display: 'flex' }}
        onClick={() => handleClickOpen(product)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ width: 200 }}
          image="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_8_8_14_34_922_00.jpg"
        />
        <CardContent component={Grid} container spacing={2}>
          <Grid container>
            <Typography
              variant="subtitle1"
              component={Grid}
              item
              xs={12}
              sm={12}
              md={12}
            >
              {product.Name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component={Grid}
              item
              xs={12}
              sm={12}
              md={12}
            >
              {price}
            </Typography>
          </Grid>
          {/* <Grid container>{specification()}</Grid> */}
        </CardContent>
        <CardActions>
          <Chart prices={product.Prices} />
        </CardActions>
      </Button>
    </React.Fragment>
  );
}
