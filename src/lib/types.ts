import { PropsWithChildren } from 'react';

export interface DC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): React.ReactElement<
    any,
    any
  > | null;
}

export type Pokemon = {
  name: string;
  url: string;
};

export type SinglePokemon = {
  name: string;
  sprites: Record<string, string>;
};
