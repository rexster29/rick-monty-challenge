import { memo } from 'react'

const CharacterCard = memo(({ character }) => {
  return (
    <div className="character-card bg-white p-4 border rounded shadow">
      <img
        className="w-full h-64 object-cover rounded-t"
        src={character.image}
        alt={character.name}
      />
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold">{character.name}</h3>
        <p className="text-sm text-gray-500">Status: {character.status}</p>
        <p className="text-sm text-gray-500">Species: {character.species}</p>
        <p className="text-sm text-gray-500">Gender: {character.gender}</p>
        <p className="text-sm text-gray-500">Episodes: &nbsp;
            {character.episode.map((episode, index) => {
                return episode.replace('https://rickandmortyapi.com/api/episode/', '') + `${index != character.episode.length - 1 ? ', ' : ''}`
            })}
        </p>
      </div>
    </div>
  )
});

export default CharacterCard;
