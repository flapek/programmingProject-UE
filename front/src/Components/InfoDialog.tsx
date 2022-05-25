import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Product } from '../Types';
import Chart from './Chart';

export default function ScrollDialog({
  open,
  product,
  handleClose,
}: {
  open: boolean;
  product: Product | undefined;
  handleClose: () => void;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {product?.Name ?? ''}
        </DialogTitle>
        <DialogContent>
          <img
            // sx={{ width: 200 }}
            style={{ width: 500 }}
            src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_8_8_14_34_922_00.jpg"
          ></img>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {product?.Specification.forEach((value, key) => {
              const insideTable = (value: string[]) => {
                return value.map((value, idx) => (
                  <Grid key={idx}>{value}</Grid>
                ));
              };

              return (
                <Grid key={key} container>
                  <Grid item>{key}</Grid>
                  <Grid container>{insideTable(value)}</Grid>
                </Grid>
              );
            }) ?? ''}
          </DialogContentText>
          <Chart prices={product?.Prices ?? []} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
