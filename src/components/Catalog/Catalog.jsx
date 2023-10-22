import { useEffect, useState } from 'react';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { fetchCars } from 'services/carRentalApi';
import { toast } from 'react-toastify';
import { Button, CatalogWrapper } from './Catalog.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export function Catalog() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    const perPage = 8;

    (async () => {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchCars(page, perPage);
        setShowLoadMoreBtn(true);

        setCars(prev => [...prev, ...data]);

        if (data.length < perPage) {
          toast.info('Oops, this is the end of the collection');

          setShowLoadMoreBtn(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  return (
    <CatalogWrapper>
      <Filter filter={setFilteredCars} />

      {isLoading && page === 1 ? (
        <Loader />
      ) : (
        <CatalogList list={filteredCars.length ? filteredCars : cars} />
      )}

      {isLoading && page !== 1 ? (
        <Loader />
      ) : (
        showLoadMoreBtn && (
          <Button type="button" onClick={() => setPage(state => state + 1)}>
            Load more
          </Button>
        )
      )}
    </CatalogWrapper>
  );
}
