import { CatalogItem } from '../CatalogItem/CatalogItem';
import { List } from './CatalogList.styled';

export function CatalogList({ list, favorites }) {
  return (
    <List>
      {list.map(car => (
        <CatalogItem item={car} key={car.id} favorites={favorites} />
      ))}
    </List>
  );
}
