import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Dashboard/HomePage";
import Messegaes from "./pages/Messages/Messegaes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashbaord/messages" element={<Messegaes  />} />
    </Routes>
  );
};

export default App;
