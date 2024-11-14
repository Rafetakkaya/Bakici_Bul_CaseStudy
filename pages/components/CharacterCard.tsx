
type CharacterProps = {
  character: {
    id: number;
    name: string;
    status: string;
    species?: string; 
    type?: string;     
    gender: string;
    origin?: {
      name: string;
      url: string;
    };
    location?: {
      name: string;
      url: string;
    };
    image: string;
    episode?: string[]; 
  };
};

export default function CharacterCard({ character }: CharacterProps) {
  const statusColor: any = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={character.image}
        alt={character.name}
        className="w-32 h-32 rounded-full mx-auto mb-2"
      />
      <h3 className="text-xl font-bold text-white">{character.name}</h3>
      
      {/* Durum bilgisi */}
      <div className="flex items-center justify-center mt-2">
        <span className={`w-3 h-3 rounded-full ${statusColor[character.status]} mr-2`} />
        <p className="text-sm text-gray-400">Status: {character.status}</p>
      </div>

      <p className="text-sm text-gray-400 mt-1">Gender: {character.gender}</p>
      {character.species && <p className="text-sm text-gray-400">Species: {character.species}</p>}
      {character.type && <p className="text-sm text-gray-400">Type: {character.type}</p>}
      {character.origin && (
        <p className="text-sm text-gray-400">Origin: {character.origin.name || "Unknown"}</p>
      )}
      {character.location && (
        <p className="text-sm text-gray-400">Location: {character.location.name || "Unknown"}</p>
      )}
      {character.episode && character.episode.length > 0 && (
        <p className="text-sm text-gray-400">
          First Seen In: <a href={character.episode[0]} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Episode 1</a>
        </p>
      )}
    </div>
  );
}
