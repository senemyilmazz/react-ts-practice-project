import { ReactElement, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Navbar from './components/Navbar/Navbar'
import ProductAdd from './pages/ProductAdd/ProductAdd';

function App() :ReactElement {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route path="/product-add" element={<ProductAdd />}></Route>
        </Routes>
    </>
  );
}

export default App
