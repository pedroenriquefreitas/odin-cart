import './App.css';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { ProductActionsContext } from './components/ProductActionsContext';

function App() {
  const [productActions, setProductActions] = useState({});

  return (
    <ProductActionsContext.Provider value={{ productActions, setProductActions }}>
      <Header />
      <Outlet />
    </ProductActionsContext.Provider>
  )
};

export default App;

