import { useContext } from "react";
import { AuthForm } from "../components/AuthForm";
import AuthContext from "../../../context/auth/auth-context";

export const Auth = () => {
  const authCtx = useContext(AuthContext);

  const login = () => {
    authCtx.onLogin();
  };
  const logout = () => {
    authCtx.onLogout();
  };
  return (
    <>
      <AuthForm />
      {authCtx.isLoggedIn && <span>Zalogowany</span>}
      <button type="button" onClick={login}>
        Login
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};
