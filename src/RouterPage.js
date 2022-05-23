import React from 'react';
import ChartData from './Components/Chart-Data';
import Login from './Components/Login';
import './App.css';
import {
    BrowserRouter ,
    Router,
    Switch,
    Routes,
    Route,
    Link
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