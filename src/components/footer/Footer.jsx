import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Ending,
} from "./FooterStyles";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box>
      <Container>
        <span style={{ marginLeft: "80px" }}>
          <AiFillFacebook
            style={{ height: "40px", width: "40px", color: "#686868" }}
          />
          <AiFillTwitterCircle
            style={{
              height: "40px",
              width: "40px",
              color: "#686868",
              marginLeft: "10px",
            }}
          />
          <AiFillYoutube
            style={{
              height: "40px",
              width: "40px",
              color: "#686868",
              marginLeft: "10px",
            }}
          />
          <AiOutlineInstagram
            style={{
              height: "40px",
              width: "50px",
              color: "#686868",
              marginLeft: "10px",
            }}
          />
        </span>
        <Row>
          <Column>
            <FooterLink href="#">Audio and Subtitles</FooterLink>
            <FooterLink href="#">Media Center</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Audio Description</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Legal Notices</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Corporate Information</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Gift Cards</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
        </Row>
      </Container>
      <Ending>
        <p>&copy 1997-2018 Netflix, Inc.</p>
        <p>Carlos Avila &copy 2018</p>
      </Ending>
    </Box>
  );
};
export default Footer;
