import { useState } from "react";
import ErrorMessage from "./components/Error.jsx";
import CharactersList from "./components/CharactersList.jsx";
import Search from "./components/Search.jsx";
import { debounce } from "./utils.js";
import fetchCharacters from "./http.js";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [errorFetchingCharacters, setErrorFetchingCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetchCharacters = debounce(async (searchValue) => {
    setErrorFetchingCharacters(null);

    if (searchValue.length < 3) {
      setCharactersList([]);
      return;
    }

    setIsLoading(true);

    try {
      const fetchedData = await fetchCharacters(searchValue);

      setCharactersList([...fetchedData]);
    } catch (error) {
      setErrorFetchingCharacters({
        message: error.message || "An error occured!",
      });
      setCharactersList([]);
    }
    setIsLoading(false);
  }, 500);

  return (
    <main className="max-w-[1596px] mx-auto px-2">
      <Search
        type="text"
        placeholder="Search characters..."
        onSearch={debouncedFetchCharacters}
        quantityFound={charactersList.length}
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
      
      <CharactersList charactersList={charactersList} />
    </main>
  );
}

export default App;
