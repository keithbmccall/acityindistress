/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument */
import { authorization, keychain } from '@keychain';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...authorization,
  },
};

export const fetchQuery = async (
  query: string,
  variables?: any,
): Promise<{ data: any }> => {
  try {
    const response = await fetch(keychain.api.url, {
      ...options,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body: JSON.stringify({ query, variables }),
    });
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (e: unknown) {
    console.log(`You messed up the query, man: `, { e });
    return { data: {} };
  }
};
