import React from 'react';
import useStore from '../../zustand/store';

export function Home() {
  const bears = useStore(state => state.bears);
  const addBear = useStore(state => state.addABear);

  console.log(bears);
  return (
    <div>
      <h2>Homepage</h2>
      <button type="button" onClick={addBear}>
        Add bear
      </button>
      <p>Number of Bears - {bears}</p>
    </div>
  );
}
