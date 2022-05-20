import { Box, TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from '../Components';
import mockedProducts from '../Data/mockedProducts';
import { Product } from '../Types';

export default function Home() {
  const [elements, setElements] = useState<Product[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    setElements(mockedProducts);
  }, []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
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

  return (
    <React.Fragment>
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
            <Card key={idx} product={item} />
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
    </React.Fragment>
  );
}
