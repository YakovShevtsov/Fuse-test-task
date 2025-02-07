import ErrorMessage from "./components/Error.jsx";
import CharactersList from "./components/CharactersList.jsx";
import Search from "./components/Search.jsx";
import fetchCharacters from "./http.js";
import useFetch from "./hooks/useFetch.js";

function App() {
  const {
    data: fetchedCharacters,
    error: errorFetchingCharacters,
    isLoading,
    debouncedFetch: debouncedFetchingCharacters,
  } = useFetch(fetchCharacters, 500);

  return (
    <main className="max-w-[1596px] mx-auto px-2">
      <Search
        type="text"
        placeholder="Search characters..."
        onSearch={debouncedFetchingCharacters}
        quantityFound={fetchedCharacters.length}
        autoFocus
      />

      {isLoading && (
        <p className="text-center font-primary text-4xl mt-16">
          Loading characters...
        </p>
      )}

      {errorFetchingCharacters && (
        <ErrorMessage message={errorFetchingCharacters.message} />
      )}

      <CharactersList charactersList={fetchedCharacters} />
    </main>
  );
}

export default App;
