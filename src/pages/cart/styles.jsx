import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 2em;
  padding: 2em;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url("PizzeriaCover.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

  .cartContent {
    color: black;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    color: white;
    gap: 20px;
    border-radius: 10px;
  }
  .cartContent h1 {
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 4px;
  }
  .pedido {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  .pedido img {
    max-width: 100%;
    height: 200px;
    border-radius: 10px;
  }
  button {
    margin: auto;
    width: 15%;
    border: none;
    padding: 7px;
    cursor: pointer;
    border-radius: 4px;
    font-family: "Noto Serif Georgian", serif;
    font-weight: 400;
    transition: all 0.2s linear;
    background-color: red;
    color: white;
  }
  button:hover {
    background-color: #b60303;
    color: white;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-flow: column wrap;
    gap: 2em;
    padding: 2em;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: url("PizzeriaCover.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;

    .cartContent {
      color: black;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-flow: column wrap;
      color: white;
      gap: 20px;
      border-radius: 10px;
    }
    .cartContent h1 {
      color: white;
      font-size: 1.5em;
      background-color: black;
    }
    .pedido {
      background-color: black;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }
    .pedido img {
      max-width: 100%;
      height: 200px;
      border-radius: 10px;
    }
    button {
      width: 50%;
      margin: auto;
      border: none;
      padding: 7px;
      cursor: pointer;
      border-radius: 4px;
      font-family: "Noto Serif Georgian", serif;
      font-weight: 400;
      transition: all 0.2s linear;
      background-color: red;
      color: white;
    }
  }
`;
