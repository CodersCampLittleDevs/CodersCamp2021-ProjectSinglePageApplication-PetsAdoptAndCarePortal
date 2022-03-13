import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useHttpClient } from "../../hooks/httpHook";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  userId: null,
});

export const AuthContextProvider = ({ children }) => {
  const { sendRequest } = useHttpClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = async (data) => {
    try {
      await sendRequest("http://localhost:8000/auth/login", "POST", data);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  const context = useMemo(
    () => ({
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }),

    [isLoggedIn],
  );
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
