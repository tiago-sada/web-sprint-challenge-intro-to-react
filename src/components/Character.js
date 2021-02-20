import React from 'react';
import styled from 'styled-components'

const CharacterCard = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    width: 30%;
    padding: 20px;
    margin: 15px;
    /* border: 1px solid red; */
`;

const Character = props => {
    const { character } = props;
    
    return (
        <CharacterCard>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Hair Color: {character.hair_color}</p>
        </CharacterCard>
    )
}


export default Character;