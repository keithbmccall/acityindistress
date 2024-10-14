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
      const cheq = await getTheCheck();
      console.log({ cheq });
      setCheck(cheq.name as string);
    } catch (e: unknown) {
      console.log({
        e,
      });
    }
  };

  return (
    <button onClick={askForTheCheck} className="red">
      {`${children}::${check}`}
    </button>
  );
};
