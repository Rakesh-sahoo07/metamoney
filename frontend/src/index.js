import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import GamesPage from "./gamepage";
ReactDOM.render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </BrowserRouter>
    </>,
  
    document.getElementById("root")
  );