import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 20px 0 16px;
`;

const Name = styled.p`
  font-size: 14px;
`;

const Category = ({ changeChannel, info, changeIndex }) => {
  const onChangeBackground = () => {
    changeIndex(info.id - 1);
    changeChannel(info.id);
  };

  return (
    <Container onClick={onChangeBackground}>
      <Wrapper>
        <Avatar src={info.img} />
        <Name>{info.name}</Name>
      </Wrapper>
    </Container>
  );
};

export default Category;
