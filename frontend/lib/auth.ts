export const API_BASE = "http://127.0.0.1:8000";

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: email,
      password: password,
    }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json(); // { access_token, token_type }
}

export function saveToken(token: string) {
  localStorage.setItem("nettra_token", token);
}

export function getToken() {
  return localStorage.getItem("nettra_token");
}

export function logout() {
  localStorage.removeItem("nettra_token");
}