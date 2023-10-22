import React from 'react';
import {
  BgImage,
  Header,
  HeaderLink,
  HeroBox,
  HeroBtn,
  StyledLink,
  Title,
} from './HomePage.styled';

export function HomePage() {
  return (
    <BgImage>
      <Header>
        <HeaderLink to="/catalog">Catalog</HeaderLink>
        <HeaderLink to="/favorites">Favorites</HeaderLink>
      </Header>
      <HeroBox>
        <Title>Ride the car of your dreams</Title>
        <StyledLink to="/catalog">
          <HeroBtn>Make a choice</HeroBtn>
        </StyledLink>
      </HeroBox>
    </BgImage>
  );
}
