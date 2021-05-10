import React from "react";
import styled from "styled-components";
import phone from "../Imagine/phone.png";
import email from "../Imagine/email.png";
import address from "../Imagine/address.png";
import facebook from "../Imagine/facebook.png";
import instagram from "../Imagine/instagram.png";

const FooterCard = styled.div`
  color: black;
  background-color: white;
  width: 60vw;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterSmall = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-evenly;
`;
const OpeningHour = styled.div`
  margin-right: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: table;
  align-items: center;
  height: 2rem;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  margin-left: 0.5rem;
`;
const Li = styled.li`
  margin: 0.1rem auto auto 0.1rem;
`;

const Img = styled.img`
  margin-left: 0.5rem;
`;

function Footer() {
  return (
    <FooterCard>
      <FooterSmall>
        <OpeningHour>
          <Title>Our opening hours:</Title>
          <ul>
            <Li>Tue – Fri: 11:00 – 20:00</Li>
            <Li>Sat: 17:00 – 21:00</Li>
            <Li>
              Mon, Sun:<b>Close</b>
            </Li>
          </ul>
        </OpeningHour>
        <div>
          <Title>Contact information</Title>
          <Card>
            <img src={phone} height="20rem" width="20rem" alt="error" />
            <Text>+358 123 45678</Text>
          </Card>
          <Card>
            <img src={email} height="20rem" width="20rem" alt="error" />
            <Text>burgerHeaven@gmail.com</Text>
          </Card>
          <Card>
            <img src={address} height="20rem" width="20rem" alt="error" />
            <Text>Kivihaantie 3 , 00310, Helsinki</Text>
          </Card>
        </div>
      </FooterSmall>
      <Card>
        <Title>Follow us on :</Title>
        <Img src={facebook} height="20rem" width="20rem" alt="error" />
        <Img src={instagram} height="20rem" width="20rem" alt="error" />
      </Card>
    </FooterCard>
  );
}

export default Footer;
