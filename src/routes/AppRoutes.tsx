import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import WelcomeLayout from '../config/layout/WelcomeLayout';
import addTransaction from '../pages/AddTransaction';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeLayout component={Welcome} />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
        <Route path="/add" element={<DefaultLayout component={addTransaction} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
