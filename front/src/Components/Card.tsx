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
import { Product } from '../Types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export default function Card({ product }: { product: Product }) {
  const price = `Price: ${product.Prices.at(-1)
    ?.Value.toString()
    .replace('.', ',')} PLN`;

  const labels = product.Prices.map((price) =>
    price.Data.getUTCDate().toString(),
  );
  const data = {
    labels,
    datasets: [
      {
        data: product.Prices.map((price) => price.Value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const specification = () => {
    return product.Specification.forEach((value, key) => (
      <Grid key={key}>
        {key} | {value}
      </Grid>
    ));
  };

  return (
    <React.Fragment>
      <Button component={CardMui} sx={{ display: 'flex' }}>
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
          <Line options={options} data={data} />
        </CardActions>
      </Button>
    </React.Fragment>
  );
}