import React from "react";
import styled from "styled-components";
import phone from "../Imagine/phone.png";
import email from "../Imagine/email.png";
import address from "../Imagine/address.png";

const FooterCard = styled.div`
  color: black;
  background-color: white;
  width: 80vw;
`;

const FooterSmall = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: table;
  align-items: center;
`;

function Footer() {
  return (
    <FooterCard>
      <FooterSmall>
        <div>
          <p>Our opening hours:</p>
          <ul>
            <li>Mon: 11:00 – 14:00</li>
            <li>Tue – Fri: 11:00 – 20:00</li>
            <li>Sat: 17:00 – 21:00</li>
            <li>Sun:Close</li>
          </ul>
        </div>
        <div>
          <p>Contact information</p>
          <ContactCard>
            <img src={phone} height="30rem" width="30rem" alt="error" />
            <p>+358 123 45678</p>
          </ContactCard>
          <ContactCard>
            <img src={email} height="30rem" width="30rem" alt="error" />
            <p>burgerHeaven@gmail.com</p>
          </ContactCard>
          <ContactCard>
            <img src={address} height="30rem" width="30rem" alt="error" />
            <p>Kivihaantie 3 , 00310, Helsinki</p>
          </ContactCard>
        </div>
      </FooterSmall>

      <div>Follow us</div>
    </FooterCard>
  );
}

export default Footer;
