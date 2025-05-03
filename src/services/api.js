const BASE_URL = 'http://localhost:5000/api';

export async function fetchData(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Something went wrong');
  return data;
}
