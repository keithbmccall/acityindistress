'use client';

import { useEffect, useState } from 'react';
import { queryPokemon } from './actions';
import { Input } from './input';

export const PokeSearch = () => {
  const [suggestiveSearchResults, setSuggestiveSearchResults] = useState([]);
  const searchPokemon = async (value: string) => {
    try {
      const pokemon = await queryPokemon(
        'https://pokeapi.co/api/v2/pokemon?limit=2000',
      );
      const relevantPokemon = pokemon.results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value),
      );
      setSuggestiveSearchResults(relevantPokemon);
    } catch (e: unknown) {
      console.log({
        e,
      });
    }
  };
  useEffect(() => {
    console.log({
      suggestiveSearchResults,
    });
  }, [suggestiveSearchResults]);

  return (
    <div>
      <Input suggestiveSearch={searchPokemon}></Input>
      {/*  TODO: Suggestion DropDown Section*/}
    </div>
  );
};
