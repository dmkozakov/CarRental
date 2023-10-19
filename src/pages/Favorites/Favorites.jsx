import React from 'react';
import useStore from '../../zustand/store';
import { CatalogList } from 'components/CatalogList/CatalogList';

export function Favorites() {
  const favorite = useStore(state => state.favorite);

  return (
    <div>
      <h2>Favorites page</h2>
      <CatalogList list={favorite} />
    </div>
  );
}
