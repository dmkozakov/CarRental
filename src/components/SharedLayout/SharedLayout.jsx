import { Sidebar } from 'components/Sidebar/Sidebar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, MainContent } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Sidebar />
      <Suspense fallback="Loading">
        <MainContent>
          <Outlet />
        </MainContent>
      </Suspense>
    </Container>
  );
}
