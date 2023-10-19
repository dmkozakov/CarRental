import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Catalog } from 'pages/Catalog/Catalog';
import { Favorites } from 'pages/Favorites/Favorites';
import { Home } from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
