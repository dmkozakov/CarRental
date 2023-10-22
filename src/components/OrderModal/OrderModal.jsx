import { Modal } from 'components/Modal/Modal';
import React from 'react';
import {
  Accent,
  CallLink,
  Condition,
  ConditionBox,
  Description,
  DescriptionBox,
  FunctionalitiesBox,
  IconClose,
  Image,
  ImageBox,
  ModalWrapper,
  OrderBtn,
  RentalBox,
} from './OrderModal.styled';
import {
  Model,
  Tag,
  TagsBox,
  TagsLine,
  Title,
} from 'components/CatalogItem/CatalogItem.styled';

import icons from '../../assets/images/icons.svg';

export function OrderModal({ item, onClose }) {
  const {
    make,
    model,
    img,
    year,
    address,
    rentalPrice,
    fuelConsumption,
    engineSize,
    mileage,
    type,
    description,
    functionalities,
    accessories,
    rentalConditions,
  } = item;

  const conditions = rentalConditions.split('\n');
  const city = address.split(', ').slice(1)[0];
  const country = address.split(', ').slice(2)[0];

  const minimumAge = parseInt(conditions[0].match(/\d+/));
  const formattedMileage = mileage.toLocaleString();

  return (
    <Modal onClose={onClose}>
      <ModalWrapper>
        <IconClose onClick={onClose}>
          <svg>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </IconClose>

        <ImageBox>
          <Image src={`${img}`} alt={`${make} ${model}`} />
        </ImageBox>
        <DescriptionBox>
          <Title>
            {make} <Model>{model}</Model>, {year}
          </Title>
        </DescriptionBox>

        <TagsBox>
          <TagsLine>
            <Tag>{city}</Tag>
            <Tag>{country}</Tag>
            <Tag>Year: {year}</Tag>
            <Tag>Type: {type}</Tag>
          </TagsLine>
          <TagsLine>
            <Tag>Fuel Consumption: {fuelConsumption}</Tag>
            <Tag>Engine Size: {engineSize}</Tag>
          </TagsLine>
        </TagsBox>

        <Description>{description}</Description>

        <FunctionalitiesBox>
          Accessories and functionalities:
          <TagsBox>
            <TagsLine>
              {accessories.map(item => (
                <Tag key={item}>{item}</Tag>
              ))}
            </TagsLine>
            <TagsLine>
              {functionalities.map(item => (
                <Tag key={item}>{item}</Tag>
              ))}
            </TagsLine>
          </TagsBox>
        </FunctionalitiesBox>

        <RentalBox>
          Rental Conditions:
          <ConditionBox>
            <Condition>
              Minimum age: <Accent>{minimumAge}</Accent>
            </Condition>
            <Condition>{conditions[1]}</Condition>
            <Condition>{conditions[2]}</Condition>
            <Condition>
              Mileage: <Accent>{formattedMileage}</Accent>
            </Condition>
            <Condition>
              Price: <Accent>{rentalPrice}</Accent>
            </Condition>
          </ConditionBox>
        </RentalBox>

        <CallLink href="tel:+380730000000" style={{ display: 'block' }}>
          <OrderBtn>Rental car</OrderBtn>
        </CallLink>
      </ModalWrapper>
    </Modal>
  );
}
