'use client';

import { Pokemon } from '@global-types';
import { debounce } from '@utils';
import Link from 'next/link';
import { useState } from 'react';
import { queryPokemon } from './actions';
import { Input } from './input';

export const PokeSearch = () => {
  const [suggestiveSearchResults, setSuggestiveSearchResults] = useState<
    Pokemon[]
  >([]);
  const searchPokemon = async (value: string) => {
    try {
      const queriedPokemon = (
        (await queryPokemon('https://pokeapi.co/api/v2/pokemon?limit=2000')) ||
        {}
      )?.results as Pokemon[] | undefined;

      const relevantPokemon = queriedPokemon?.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(value),
      );
      if (relevantPokemon) {
        setSuggestiveSearchResults(relevantPokemon);
      }
    } catch (e: unknown) {
      console.log({
        e,
      });
    }
  };

  return (
    <div>
      <Input suggestiveSearch={debounce(searchPokemon, 300)}></Input>
      {suggestiveSearchResults.length > 0 && (
        <div className="bg-white">
          {suggestiveSearchResults.map(result => (
            <p className="black-60 bb bw1 b--black pa2" key={result.name}>
              <Link href={`/poke/${result.name}`} className="flex">
                {result.name}
              </Link>
            </p>
          ))}
        </div>
      )}
      {/*  TODO: Suggestion DropDown Section*/}
    </div>
  );
};
