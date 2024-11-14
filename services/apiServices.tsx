

const API_URL = process.env.NEXT_PUBLIC_RICK_AND_MORTY_API;

export async function fetchCharacters() {
  const res = await fetch(`${API_URL}/character`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await res.json();
  return data.results;
}
