import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthStore } from "./store/Auth-Context";

function App() {
  const AuthCtx = useContext(AuthStore);
  return (
    <>
      <MainHeader />
      <main>
        {!AuthCtx.isLoggedIn && <Login />}
        {AuthCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
