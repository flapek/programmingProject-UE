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

  const specification = () => {
    const elements: JSX.Element[] = [];
    product?.specification.forEach((value, key) => {
      const insideTable = (value: string[]) => {
        return value.map((value, idx) => <Grid key={idx}>{value}</Grid>);
      };

      if (value !== undefined)
        elements.push(
          <Grid key={key} container>
            <Grid item>{key}</Grid>
            <Grid item sx={{ marginLeft: 1, marginRight: 1 }}>
              |
            </Grid>
            <Grid item>{insideTable(value)}</Grid>
          </Grid>,
        );
    });
    return elements;
  };

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
          {product?.name ?? ''}
        </DialogTitle>
        <DialogContent>
          <img style={{ width: 500 }} src={product?.image}></img>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {specification()}
          </DialogContentText>
          <Chart prices={product?.price ?? []} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
