import React from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Game from "./Pages/Game";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Game />
      </Main>
      <Footer />
    </>
  );
}

export default App;
