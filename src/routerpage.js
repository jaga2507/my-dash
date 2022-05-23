import React from 'react';
import ChartData from './components/chart-data';
import Login from './components/login';
import './app.css';
import {
    BrowserRouter ,
    Routes,
    Route,
} from "react-router-dom";

function RouterPage() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/chart_data" element={<ChartData/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default RouterPage;