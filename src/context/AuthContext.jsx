import { createContext, useState, useEffect } from "react";
import { setToken, getToken, removeToken } from "../api/token";
import { userUser } from "../hooks/userUser";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const { getME } = userUser();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        const me = await getME(token);
        setAuth({ token, me });
      } else {
        setAuth(null);
      }
    })();
  }, [getME]);

  const login = async (token) => {
    setToken(token);
    const me = await getME(token);
    setAuth({ token, user: me });
    console.log(me);
  };

  const logout = () => {
    if (auth) {
      setAuth(null);
      removeToken();
    }
  };

  const data = { auth, login, logout };

  if (auth === undefined) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
