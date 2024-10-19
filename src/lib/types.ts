import { PropsWithChildren } from 'react';

export interface DC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): React.ReactElement<
    any,
    any
  > | null;
}

export type Pokemon = () => {
  url: string;
  name: string;
};
