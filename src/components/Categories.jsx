import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const Container = styled.div`
  height: 50vh;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #383838;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:before {
    content: "";
    width: 200px;
    height: 48px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    border-radius: 10px;
    z-index: 1;
    transform: ${(props) => `translateX(calc(${props.index} * 100%))`};
    transition: all 0.3s ease-in-out;
  }
`;

const Categories = ({ changeChannel }) => {
  const clients = [
    {
      id: 1,
      name: "Hà Tiều Phu",
      img: "https://yt3.ggpht.com/ytc/AKedOLRdMeUndRVWyCq1zRfgKtJM9CfCwczo-rmxG20eRQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      name: "Bí kiếp troll team",
      img: "https://yt3.ggpht.com/ytc/AKedOLRdMeUndRVWyCq1zRfgKtJM9CfCwczo-rmxG20eRQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      name: "Gầy best Leesin",
      img: "https://yt3.ggpht.com/ytc/AKedOLRdMeUndRVWyCq1zRfgKtJM9CfCwczo-rmxG20eRQ=s88-c-k-c0x00ffffff-no-rj",
    },
  ];

  const [index, setIndex] = useState(0);

  const onChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Container>
      <Wrapper index={index}>
        {clients.map((c) => (
          <Category
            key={c.id}
            changeChannel={changeChannel}
            info={c}
            changeIndex={onChangeIndex}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
