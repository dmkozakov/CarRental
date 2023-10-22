import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <ModernNormalize />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
