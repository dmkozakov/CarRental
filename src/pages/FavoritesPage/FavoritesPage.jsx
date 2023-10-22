import React from 'react';
import useStore from '../../zustand/store';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Container } from 'pages/CatalogPage/CatalogPage.styled';

export function FavoritesPage() {
  const favorite = useStore(state => state.favorite);

  return (
    <Container>
      <h2>Favorites page</h2>
      <CatalogList list={favorite} favorites />
    </Container>
  );
}
