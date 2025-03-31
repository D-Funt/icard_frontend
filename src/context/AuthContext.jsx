import { createContext, useState, useEffect } from "react";
import { setToken, getToken, removeToken } from "../api/token";
import { useUser } from "../hooks/useUser";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const { getME } = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        try {
          const me = await getME(token);
          setAuth({ token, me });
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
          setAuth(null);
          removeToken(); // Elimina el token si no se puede obtener el usuario
        }
      } else {
        setAuth(null);
      }
    })();
  }, []); // Solo se ejecuta al montar el componente (tener cuidado, puede crear un bucle infinito en fetch)

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
