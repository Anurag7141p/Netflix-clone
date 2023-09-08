import styled from "styled-components";

export const Box = styled.div`
  padding-top: 50px;
  background: #222222;
  padding-bottom: 30px;
  width: 100%;
  min-height: 100px;
  margin-top: 55px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding-left: 150px;
  /* margin: 0 80px; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 90px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 70px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #686868;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  padding-top: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Ending = styled.div`
  color: #686868;
  padding: 20px;
  text-align: center;
  margin: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

`;
