import { BASE_API } from "../utils/constant"

export async function loginApi(formValue) {
    try {
        const url = `${BASE_API}api/auth/login/`;
        const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
        };
        const response = await fetch(url, params);

        if (response.status !== 200) throw new Error("Error al iniciar sesión");

        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
    }

export async function getMeApi(token) {
    try {
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        };
        const response = await fetch(url, params);

        if (response.status !== 200) throw null;

        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}