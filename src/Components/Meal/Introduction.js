import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: center;
`;
function Introduction() {
  return (
    <Text>
      <h1>Welcome to burger heaven !!!</h1>
      <p>
        We are happy to bring the best food to you with our special home-made
        sauce and fresh ingredients. Order{" "}
      </p>
    </Text>
  );
}

export default Introduction;
