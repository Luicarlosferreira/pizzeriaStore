import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding: 2em;
  gap: 2em;

  span {
    font-size: 2em;
    background-color: yellow;
    padding: 10px;
    border-radius: 5px;
  }
  .pizzas {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    gap: 10px;
    width: 100%;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
    max-width: 400px;
    height: 400px;
    padding: 10px;
    background-color: #232322;
    color: white;
    text-align: center;
  }
  .item img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 5px;
  }
  .item button {
    width: 50%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-family: "Noto Serif Georgian", serif;
    font-weight: 400;
    letter-spacing: 2px;
    transition: all 0.2s linear;
  }
  .item button:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 460px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    padding: 2em;
    gap: 1em;
    text-align: center;

    span {
      font-size: 1.2em;
      background-color: yellow;
      padding: 10px;
      border-radius: 5px;
    }
    .pizzas {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      gap: 10px;
      width: 100%;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 10px;
      max-width: 400px;
      height: 100%;
      padding: 10px;
      background-color: #232322;
      color: white;
      text-align: center;
    }
    .item h1 {
      font-size: 1.2em;
    }
    .item img {
      max-width: 200px;
      max-height: 200px;
      border-radius: 5px;
    }
    .item button {
      padding: 12px;
      border: none;
      border-radius: 5px;
      background-color: black;
      color: white;
      cursor: pointer;
      font-family: "Noto Serif Georgian", serif;
      font-weight: 400;
      letter-spacing: 2px;
      transition: all 0.2s linear;
    }
  }
`;
