import React from 'react';
import { Btn } from './Button.styled';

export function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}
