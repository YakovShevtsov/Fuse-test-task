import Character from "./Character";

function CharactersList({ charactersList }) {
  return (
    <div className="my-16 flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-[250px] gap-5">
        {charactersList.slice(0, 2).map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            created={character.created}
            url={character.url}
            image={character.image}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-auto gap-5">
        {charactersList.slice(2, charactersList.length).map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            created={character.created}
            url={character.url}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CharactersList;
