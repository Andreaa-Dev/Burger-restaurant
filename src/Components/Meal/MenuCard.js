import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addOrder, cancelOrder } from "../../Redux/action";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: white;
  width: 70vw;
  margin-bottom: 1rem;
`;
const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem auto 1rem 1rem;
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: 1rem;
`;
const Description = styled.div`
  font-style: italic;
  color: #393e46;
  font-size: 0.7rem;
`;
const Price = styled.div`
  color: #900d0d;
  font-weight: bold;
  margin-top: 0.5rem;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1rem 1rem;
`;
const AmountTitle = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 0.4rem;
  font-size: 0.8rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: #900d0d;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 0.3rem;
`;

function MenuCard(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <Card>
      <Column1>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>

        <Price>$ {item.price.toFixed(2)} </Price>
      </Column1>
      <Column2>
        <div>
          <AmountTitle>Amount</AmountTitle>
          <input type="button" value={item.amount} />
        </div>
        <Buttons>
          <Button onClick={() => dispatch(addOrder(item.id))}>+</Button>
          <Button onClick={() => dispatch(cancelOrder(item.id))}>-</Button>
        </Buttons>
      </Column2>
    </Card>
  );
}

export default MenuCard;
