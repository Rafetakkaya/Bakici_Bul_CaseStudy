import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Filter from "./components/Filter";
import { fetchCharacters } from "../services/apiServices";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
};

type Props = {
  characters: Character[];
};

export default function Home({ characters }: Props) {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  const filteredCharacters = characters.filter((character: Character) => {
    return (
      (statusFilter ? character.status === statusFilter : true) &&
      (genderFilter ? character.gender === genderFilter : true)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Rick and Morty Character Filter
      </h1>
      <img
        src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2024/01/23/1245006-205355348.jpg?itok=H2JIVpe0"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
        alt="Rick and Morty Logo"
      />

      <Filter
        statusFilter={statusFilter}
        genderFilter={genderFilter}
        setStatusFilter={setStatusFilter}
        setGenderFilter={setGenderFilter}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const characters = await fetchCharacters();

  return {
    props: {
      characters,
    },
    revalidate: 3600,
  };
}
