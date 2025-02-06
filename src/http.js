export default async function fetchCharacters(searchValue) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchValue}`
  );
  const data = await response.json();

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Cant find such characters.");
    }
    throw new Error("Failed to fetch characters.");
  }

  return data.results;
}
