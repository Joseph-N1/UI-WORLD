import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/CharacterDetails.css';

const characterData = {
  1: { name: 'Character 1', description: 'Description of Character 1' },
  2: { name: 'Character 2', description: 'Description of Character 2' },
  // Add more character data as needed
};

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characterData[id];

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetails;
