import React from 'react';
import useStore from '../../zustand/store';

export function CatalogItem({ item }) {
  const addFavorite = useStore(state => state.addFavorite);
  const removeFavorite = useStore(state => state.removeFavorite);

  console.log(item);
  return (
    <li key={item.id}>
      <p>{item.make}</p>
      <p>{item.model}</p>
      <button type="button" onClick={() => addFavorite(item)}>
        Add to favorite
      </button>
      <button type="button" onClick={() => removeFavorite(item.id)}>
        Remove favorite
      </button>
    </li>
  );
}
