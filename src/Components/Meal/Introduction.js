import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: center;
  margin: 1rem auto 1.5rem;
`;

function Introduction() {
  return (
    <Text>
      <h1>Welcome to "BURGER HEAVEN"</h1>
      <p>
        We are happy to bring the best food to you with our special home-made
        sauce and fresh ingredients. Order now to get <b>25%</b>
        discount.
      </p>
    </Text>
  );
}

export default Introduction;
