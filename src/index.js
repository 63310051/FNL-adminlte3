import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from './Login.js'
import Album from './Album.js'
import Register from './Register'
import Student from './Student'
import reportWebVitals from "./reportWebVitals";
import Candy from "./components/Sweet/Candy"
import Cookie from "./components/Sweet/Cookie"
import Pie from "./components/Sweet/Pie"
import Cakecup from "./components/Sweet/Cakecup"
import Cake from "./components/Sweet/Cake"
import Croissant from "./components/Sweet/Croissant"
import Heart from "./components/Sweet/Heart"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/mid-port" element={<App />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app#login" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path="/album" element={<Album />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student" element={<Student />} />
      <Route path="/candy" element={<Candy />} />
      <Route path="/cookie" element={<Cookie />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/cakecup" element={<Cakecup />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/croissant" element={<Croissant/>} />
      <Route path="/heart" element={<Heart/>} />
    </Routes>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
