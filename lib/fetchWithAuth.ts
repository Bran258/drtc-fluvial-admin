export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  let res = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (res.status === 401) {
    const refresh = await fetch("http://localhost:3001/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (refresh.ok) {
      res = await fetch(url, {
        ...options,
        credentials: "include",
      });
    } else {
      window.location.href = "/auth";
    }
  }

  return res;
}