import React from "react";
import styled from "styled-components";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const Container = styled.div`
  height: 100vh;
  padding: 0 52px;
`;

const GalleryWrapper = styled.div`
  column-count: 3;
  column-width: 33%;
`;

const Image = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 100%;
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    filter: opacity(0.6);
  }
`;

const ImageGallery = () => {
  const data = [
    "https://live.staticflickr.com/65535/51988719769_f82b1404d7_b.jpg",
    "https://live.staticflickr.com/65535/51987425782_582959d749_b.jpg",
    "https://live.staticflickr.com/65535/51988719624_983745ce65_b.jpg",
    "https://live.staticflickr.com/65535/51988431806_b247b5b67c_b.jpg",
    "https://live.staticflickr.com/65535/51988719474_7c68ae1c98_b.jpg",
    "https://live.staticflickr.com/65535/51988988560_b2a261513b_b.jpg",
    "https://live.staticflickr.com/65535/51988719259_439e759502_b.jpg",
    "https://live.staticflickr.com/65535/51988491423_f0a62753f7_b.jpg",
    "https://live.staticflickr.com/65535/51988491283_128c78a355_b.jpg",
  ];

  return (
    <Container>
      <Gallery>
        <GalleryWrapper>
          {data.map((i) => (
            <Item key={i} original={i} thumbnail={i} width="1024" height="576">
              {({ ref, open }) => <Image src={i} ref={ref} onClick={open} />}
            </Item>
          ))}
        </GalleryWrapper>
      </Gallery>
    </Container>
  );
};

export default ImageGallery;
