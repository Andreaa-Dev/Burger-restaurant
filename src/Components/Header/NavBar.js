import React from "react";
import styled from "styled-components";
import Home from "./Home";

import CartButton from "./CartButton";

const NavStyle = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-between;
  background-color: #900d0d;
  width: 100vw;
`;

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  color: white;
  display: inline-block;
  margin: 1rem auto 1rem 0.5rem;
`;

function NavBar() {
  return (
    <div>
      <NavStyle>
        <Home />
        <Title>Burger Heaven</Title>
        <CartButton />
      </NavStyle>
    </div>
  );
}

export default NavBar;
