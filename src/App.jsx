import React from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Home from "./Pages/Home";

import UserStateProvider from "./Context/User/UserState";

function App() {
  return (
    <UserStateProvider>
      <Header />
      <Main>
        <Home />
      </Main>
    </UserStateProvider>
  );
}

export default App;
