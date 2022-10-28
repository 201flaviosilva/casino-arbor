import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
