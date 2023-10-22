import { PALETTE } from 'helpers/palette';
import React from 'react';
import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color={`${PALETTE.accentColor}`}
      ariaLabel="circles-loading"
      wrapperClass=""
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        padding: '100px',
      }}
      visible={true}
    />
  );
}
