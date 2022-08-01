import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LayoutPage } from './layout'
import { ProjectDetilPage, AllProjectsPage } from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
              <Route path="" element={<AllProjectsPage />}></Route>
              <Route path=":id" element={<ProjectDetilPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
