import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Dashboard/HomePage";
import Messegaes from "./pages/Messages/Messegaes";
import Images from "./pages/Images/Images";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashbaord/messages" element={<Messegaes  />} />
      <Route path="/dashbaord/images" element={<Images  />} />
    </Routes>
  );
};

export default App;
