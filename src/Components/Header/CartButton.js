import React from "react";
import cartIcon from "../Imagine/svg";
import styled from "styled-components";

const CartStyle = styled.button`
  display: flex;
  flex-direction: table;
  border-radius: 1rem;
  border: 1px solid black;
  height: 2.5rem;
  width: 11rem;
  margin-top: 1.3rem;
`;

const cartIconStyle = styled.div`
  margin-top: 10px;
`;

const Text = styled.div`
  margin: 10px 10px auto 1px;
`;

const ButtonNumber = styled.button`
  border-radius: 1rem;
  border: 1px solid black;
  background-color: #900d0d;
  color: white;
  font-weight: bold;
  margin: 10px auto auto 20px;
  width: 1.5rem;
`;

function CartButton() {
  return (
    <CartStyle>
      <cartIconStyle>{cartIcon}</cartIconStyle>
      <Text>Your cart </Text>
      <ButtonNumber>3</ButtonNumber>
    </CartStyle>
  );
}

export default CartButton;
