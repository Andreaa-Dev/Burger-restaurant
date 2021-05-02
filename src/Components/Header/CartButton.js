import React from "react";
import cartIcon from "../Imagine/svg";
import styled from "styled-components";
import CartOrder from "./CartOrder";
import { useSelector } from "react-redux";

const CartStyle = styled.button`
  display: flex;
  flex-direction: table;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid black;
  height: 3rem;
  width: 13rem;
  margin-top: 1rem;
`;

const Icon = styled.div`
  margin: 0.5rem 0.1rem auto 0.3rem;
`;
const ButtonNumber = styled.button`
  border-radius: 1rem;
  border: 1px solid black;
  background-color: #900d0d;
  color: white;
  font-weight: bold;
  margin: 13px 1px auto 20px;
  width: 1.5rem;
`;

function CartButton() {
  const MenuItems = useSelector((state) => {
    return state.orderReducer;
  });
  console.log(MenuItems);
  const totalOrder = MenuItems.reduce((acc, current) => {
    console.log("acc", acc);
    console.log("curr", current);
    return acc + current.amount;
  }, 0);

  return (
    <CartStyle>
      <Icon>{cartIcon}</Icon>
      <CartOrder />
      <ButtonNumber>{totalOrder}</ButtonNumber>
    </CartStyle>
  );
}

export default CartButton;
