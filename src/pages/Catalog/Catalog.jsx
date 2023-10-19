import { useEffect, useState } from 'react';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { fetchCars } from 'services/carRentalApi';
import { toast } from 'react-toastify';

export function Catalog() {
  const [cars, setCars] = useState([]);
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

        console.log(data);

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
    <div className="container">
      <h2>Catalog page</h2>

      {isLoading ? 'Loading...' : <CatalogList list={cars} />}

      {showLoadMoreBtn && (
        <button type="button" onClick={() => setPage(state => state + 1)}>
          Load more
        </button>
      )}
    </div>
  );
}
