/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './style';

import 'react-slideshow-image/dist/styles.css';

export function Modal({ data }) {
  // eslint-disable-next-line array-callback-return
  const slideImages = data.map((item, index) => ({
    url: item.images?.original.url,
    caption: `Slide${index}`,
  }
  ));

  return (
    <S.ModalContainer>
      <Carousel>
        {slideImages.map((item) => (
          <div>
            <img src={item.url} alt={item.caption} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>

    </S.ModalContainer>
  );
}
