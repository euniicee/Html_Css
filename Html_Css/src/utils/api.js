const BASE = 'https://jsonplaceholder.typicode.com'

export async function saveToApi(data) {
  const res = await fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export async function loadFromApi(id) {
  const res = await fetch(`${BASE}/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}