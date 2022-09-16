import { MenuContainer } from "./styles";
import { pizzas, pizzasDoces } from "../../data/products";
import { Fade, Slide } from "react-awesome-reveal";
import { UseCartContext } from "../../hooks/useCartContext";

export const Menu = () => {
  const { addProductsToCart } = UseCartContext();

  return (
    <Fade>
      <MenuContainer>
        <span>Menu Pizzas</span>
        <div className="pizzas">
          {pizzas.map((item) => {
            return (
              <Slide triggerOnce={true} key={item.id}>
                <div className="item">
                  <img src={item.image} alt="Pizza" />

                  <Fade delay={13} cascade damping={0.1} triggerOnce={true}>
                    <h1>
                      #{item.id} - {item.name}
                    </h1>
                    <p>{item.description}</p>
                  </Fade>
                  <button onClick={() => addProductsToCart(item)}>Pedir</button>
                </div>
              </Slide>
            );
          })}
        </div>
        <span>Menu Pizzas Doces</span>
        <div className="pizzas">
          {pizzasDoces.map((item) => {
            return (
              <Slide triggerOnce={true} key={item.id}>
                <div className="item">
                  <img src={item.image} alt="pizza-image" height="200" />

                  <Fade delay={13} cascade damping={0.1} triggerOnce={true}>
                    <h1>
                      #{item.id} - {item.name}
                    </h1>
                    <p>{item.description}</p>
                  </Fade>
                  <button onClick={() => addProductsToCart(item)}>Pedir</button>
                </div>
              </Slide>
            );
          })}
        </div>
      </MenuContainer>
    </Fade>
  );
};
