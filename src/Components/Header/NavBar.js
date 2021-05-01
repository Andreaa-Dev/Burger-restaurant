import React from "react";

import CartButton from "./CartButton";

import styled from "styled-components";

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  color: white;
`;

const NavStyle = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
  background-color: #900d0d;
  width: 100vw;
`;

function NavBar() {
  return (
    <div>
      <NavStyle>
        <Title>Yummy Yummy</Title>
        <CartButton />
      </NavStyle>
    </div>
  );
}

export default NavBar;
