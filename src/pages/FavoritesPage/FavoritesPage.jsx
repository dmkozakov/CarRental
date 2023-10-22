import React from 'react';
import useStore from '../../zustand/store';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Container } from 'pages/CatalogPage/CatalogPage.styled';
import { Title } from './FavoritesPage.styled';

export function FavoritesPage() {
  const favorite = useStore(state => state.favorite);

  return (
    <Container>
      <Title>Your favorites car</Title>
      <CatalogList list={favorite} favorites />
    </Container>
  );
}
