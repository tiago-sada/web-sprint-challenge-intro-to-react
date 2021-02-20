import React from 'react';
import Character from './Character.js';
import styled from 'styled-components'

const CharactersContainer = styled.div `
    display: flex;   
    flex-direction: row; 
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    /* border: 1px solid red; */
`;

const Characters = (props) => {
    const { characters } = props;

    if (!characters) {
        return (
            <p>Characters are loading</p>
        )
    }

    return (
        <CharactersContainer>
          {
            characters.map(character => {
              return (
                <Character character={character} />
              )
            })
          }
        </CharactersContainer>
      );
  
    
};


export default Characters;