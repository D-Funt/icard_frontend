import { getMeApi } from "../api/user";

export function userUser() {
  const getME = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      return error;
    }
  };
  return { getME };
}
