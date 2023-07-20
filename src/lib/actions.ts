'use server';

const API_KEY = 'TURBOMAX';

export const getTheCheck = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.json();
};
