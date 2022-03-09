import React from 'react';
import { Route, Routes } from 'react-router';
import { Home, NoMatch } from './Pages';

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
