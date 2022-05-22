import { Box, Container, TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, InfoDialog, SearchBar } from '../Components';
import mockedProducts from '../Data/mockedProducts';
import { Product } from '../Types';

export default function Home() {
  const [elements, setElements] = useState<Product[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setElements(mockedProducts);
  }, []);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <SearchBar></SearchBar>
      </Container>
      <TablePagination
        component="div"
        count={elements.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,
        }}
      >
        {elements
          .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          .map((item, idx) => (
            <Card key={idx} product={item} handleClickOpen={handleClickOpen} />
          ))}
      </Box>
      <TablePagination
        component="div"
        count={elements.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <InfoDialog open={open} handleClose={handleClose} />
    </React.Fragment>
  );
}
