import { useState } from "react";
import { getMeApi, getUserApi, createUserApi } from "../api/user";
import { useAuth } from "./useAuth";

export function useUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const { auth } = useAuth();

  const getME = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      return error;
    }
  };

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await getUserApi(auth.token);
      setLoading(false);
      setUsers(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addUser = async (data) => {
    try {
      setLoading(true);
      const response = await createUserApi(auth.token, data);
      setLoading(false);

      if (response?.statusCode === 400) {
        setError(response?.detail);
        return;
      }

      if (response?.statusCode === 500) {
        setError("Error del servidor");
        return;
      }

      if (response?.statusCode === 401) {
        setError("Token expirado");
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, users, getME, getUsers, addUser };
}
