/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './style';

export function Card({ image, onClick }) {
  return (
    <S.CardContainer onClick={onClick}>
      <S.ImageContainer src={image} alt="thumbnail" />
    </S.CardContainer>
  );
}
