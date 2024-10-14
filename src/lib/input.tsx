'use client';

import { ChangeEvent, useState } from 'react';

export const Input = ({ suggestiveSearch }) => {
  const [input, setInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: execute debouncing logic
    const { value } = e.target;
    setInput(value);
    if (value.length >= 3) {
      suggestiveSearch(value);
    }
  };

  return (
    <div>
      <input
        style={{
          padding: '5px',
          width: '350px',
        }}
        placeholder="Type to begin searching!"
        type="text"
        onChange={onChange}
        value={input}
      />
    </div>
  );
};
