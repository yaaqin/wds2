import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './route';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;
