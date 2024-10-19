import Image from 'next/image';
import { queryPokemon } from '../../../lib/actions';
import styles from '../../page.module.css';

export default async function Pokemon({
  params,
}: {
  params: { pokemon: string };
}) {
  console.log({ params });
  const pokemon = await queryPokemon(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
  );

  console.log(
    'this page will be server side',

    pokemon.sprites.front_default,
  );
  return (
    <main className={styles.main}>
      {pokemon && (
        <>
          <div>
            <p>{pokemon.name}</p>
          </div>
          <div className="flex-row">
            {Object.keys(pokemon.sprites)
            .map(sprite =>
              sprite === 'back_default' ||
              sprite === 'front_default' ||
              sprite === 'front_shiny' ||
              sprite === 'back_shiny' ? (
                <Image
                  src={pokemon.sprites[sprite]}
                  alt={pokemon.name}
                  width={180}
                  height={180}
                />
              ) : null,
            )}
          </div>
        </>
      )}
    </main>
  );
}
