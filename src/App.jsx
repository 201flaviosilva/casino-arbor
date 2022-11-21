import React from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Game from "./Pages/Game";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Game />
      </Main>
    </>
  );
}

export default App;
