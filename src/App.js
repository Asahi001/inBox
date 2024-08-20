import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import OneBox from "./pages/one-box";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="onebox/list" element={<OneBox />}>
          {/* <Route path=":thread_id" element={<OneBox />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
