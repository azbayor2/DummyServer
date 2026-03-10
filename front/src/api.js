const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchHealth() {
  const res = await fetch(`${BASE_URL}/health`);
  return res.json();
}

export async function fetchAllData() {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
}

export async function createData(data) {
  const res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) throw new Error('Failed to create data');
  return res.json();
}

export async function fetchPython() {
  const res = await fetch(`${BASE_URL}/python`);
  return res.json();
}
