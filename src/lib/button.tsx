'use client';

import { FC, useState } from 'react';
import { getTheCheck } from './actions';

interface ButtonProps {
  children: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({ children }) => {
  const [check, setCheck] = useState<string>('');

  const askForTheCheck = async () => {
    try {
      const response = await getTheCheck();
      setCheck(response.name as string);
    } catch (e) {
      console.log({
        e,
      });
    }
  };

  return <button onClick={askForTheCheck} className="red">{`${children}::${check}`}</button>;
};
