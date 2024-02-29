import { createContext, useEffect, useState } from "react";

export const AuthStore = createContext({
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const status = localStorage.getItem("status");
    console.log(status);
    if (status == "true") {
      setIsLoggedIn(true);
    }
    console.log("111");
  }, []);
  console.log("test");
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("status", true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("status");
  };
  return (
    <AuthStore.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
export default AuthProvider;
