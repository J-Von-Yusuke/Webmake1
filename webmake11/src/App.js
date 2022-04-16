// ./src/components/App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageNotFound from './components/PageNotFound';
import PageThread from './components/PageThread';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path={'/'} element={<PageHome />} />
        <Route exact path={'/threads/:threadId'} element={<PageThread />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
