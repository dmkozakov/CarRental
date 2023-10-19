import React from 'react';
import { CatalogItem } from '../CatalogItem/CatalogItem';

export function CatalogList({ list }) {
  return (
    <ul>
      {list.map(car => (
        <CatalogItem item={car} key={car.id} />
      ))}
    </ul>
  );
}
