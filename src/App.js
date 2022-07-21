import React from "react";
import Home from "./PAGES/Home";
import CharacterPage from "./PAGES/CharacterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":character" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
