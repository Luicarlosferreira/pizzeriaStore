import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #232322;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    color: white;
    font-family: "Noto Serif Georgian", serif;
    font-weight: 300;
    letter-spacing: 2px;
    text-align: center;
  }
  div p {
    color: yellow;
    font-weight: 400;
  }
`;
