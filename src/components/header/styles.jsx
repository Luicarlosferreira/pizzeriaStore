import styled from "styled-components";

export const HeaderContent = styled.div`
  width: 100%;
  background-color: #232322;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 1em;
  gap: 30px;

  div img {
    width: 150px;
    border-radius: 50%;
  }
  div ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: "Noto Serif Georgian", serif;
    font-weight: 400;
    flex-flow: wrap;
  }
  div ul a {
    color: white;
    text-decoration: none;
    font-size: 2em;
    letter-spacing: 2px;
    transition: all 0.2s linear;
  }
  div ul a:hover {
    color: #efe6dd;
  }

  @media (max-width: 450px) {
    div ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-family: "Noto Serif Georgian", serif;
      font-weight: 400;
      flex-flow: wrap;
    }
    div ul a {
      color: white;
      text-decoration: none;
      font-size: 1.3em;
      letter-spacing: 2px;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: 320px) {
    div ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      font-family: "Noto Serif Georgian", serif;
      font-weight: 400;
      flex-flow: wrap;
    }
    div ul a {
      color: white;
      text-decoration: none;
      font-size: 1em;
      letter-spacing: 1px;
      transition: all 0.2s linear;
    }
  }
`;
