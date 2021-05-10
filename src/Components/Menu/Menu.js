import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import m1 from "../Imagine/m1.jpeg";
import m4 from "../Imagine/m4.jpeg";

const MenuCard = styled.div`
  background-color: white;
`;
const Text = styled.div`
  float: right;
  margin: auto 1rem auto 1rem;
`;

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;
function Menu() {
  const MenuItems = useSelector((state) => {
    return state.orderReducer;
  });
  console.log("menu", MenuItems);

  return (
    <div>
      <h1>Menu</h1>
      <MenuCard>
        <Text>
          <Title>{MenuItems[0].name}</Title>
          {MenuItems[0].description}
        </Text>
        <img src={m1} alt="error" height="200rem" width="150rem" />
      </MenuCard>
      <MenuCard>
        <img src={m4} alt="error" height="200rem" width="150rem" />

        <Text>
          <Title>{MenuItems[3].name}</Title>
          {MenuItems[3].description}
        </Text>
      </MenuCard>
    </div>
  );
}

export default Menu;
