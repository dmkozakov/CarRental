import { useState } from 'react';
import useStore from '../../zustand/store';
import {
  FavoriteBtn,
  Image,
  ImageBox,
  ListItem,
  ModalBtn,
  Model,
  Tag,
  TagsBox,
  TagsLine,
  Title,
  TitleBox,
} from './CatalogItem.styled';
import { OrderModal } from 'components/OrderModal/OrderModal';

export function CatalogItem({ item, favorites }) {
  const {
    id,
    make,
    model,
    img,
    year,
    address,
    rentalCompany,
    rentalPrice,
    mileage,
    type,
    functionalities,
  } = item;

  const favoriteCars = useStore(state => state.favorite);

  const [favorite, setFavorite] = useState(() =>
    favoriteCars.some(car => car.id === id)
  );

  const [openModal, setOpenModal] = useState(false);

  const addFavorite = useStore(state => state.addFavorite);
  const removeFavorite = useStore(state => state.removeFavorite);

  const addToFavorite = () => {
    setFavorite(true);
    addFavorite(item);
  };

  const removeFromFavorite = () => {
    setFavorite(false);

    removeFavorite(item);
  };

  const toggleFavorite = () =>
    favorite ? removeFromFavorite() : addToFavorite();

  const city = address.split(', ').slice(1)[0];
  const country = address.split(', ').slice(2)[0];

  return (
    <ListItem key={id}>
      <div>
        <ImageBox>
          <Image src={`${img}`} alt={`${make} ${model}`} />
        </ImageBox>

        <TitleBox>
          <Title>
            {make} <Model>{model}</Model>, {year}
          </Title>

          <p>{rentalPrice}</p>
        </TitleBox>

        <FavoriteBtn
          type="button"
          onClick={favorites ? removeFromFavorite : toggleFavorite}
          active={favorite}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"
              stroke="currentColor"
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FavoriteBtn>

        <TagsBox>
          <TagsLine>
            <Tag>{city}</Tag>
            <Tag>{country}</Tag>
            <Tag>{rentalCompany}</Tag>
          </TagsLine>

          <TagsLine>
            <Tag>{type}</Tag>
            <Tag>{model}</Tag>
            <Tag>{mileage}</Tag>
          </TagsLine>

          <TagsLine>
            <Tag>{functionalities[0]}</Tag>
          </TagsLine>
        </TagsBox>
      </div>

      <ModalBtn type="button" onClick={() => setOpenModal(true)}>
        Learn More
      </ModalBtn>
      {openModal && (
        <OrderModal item={item} onClose={() => setOpenModal(false)} />
      )}
    </ListItem>
  );
}
