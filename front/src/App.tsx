import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router';
import { SearchBar } from './Components';
import { Home, NoMatch } from './Pages';

export default function App() {
  return (
    <div>
      <main>
        <Container>
          <Container
            maxWidth={false}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <SearchBar></SearchBar>
          </Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
