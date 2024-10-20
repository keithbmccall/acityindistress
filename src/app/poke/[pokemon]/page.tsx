import { SinglePokemon } from '@global-types';
import Image from 'next/image';
import { queryPokemon } from '../../../lib/actions';
import styles from '../../page.module.css';

interface PokemonProps {
  params: { pokemon: string };
}

export default async function Pokemon({ params }: PokemonProps) {
  const pokemon = (await queryPokemon(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
  )) as SinglePokemon;
  const sprites = Object.keys(pokemon.sprites).sort().reverse();
  const spriteControl = (sprite: string) =>
    sprite === 'back_default' ||
    sprite === 'front_default' ||
    sprite === 'front_shiny' ||
    sprite === 'back_shiny';
  return (
    <main className={styles.main}>
      {pokemon && (
        <>
          <div>
            <p>{pokemon.name}</p>
          </div>
          <div className="flex-row">
            {sprites.map(sprite =>
              spriteControl(sprite) ? (
                <Image
                  alt={pokemon.name}
                  height={180}
                  src={pokemon.sprites[sprite]}
                  width={180}
                />
              ) : null,
            )}
          </div>
        </>
      )}
    </main>
  );
}
