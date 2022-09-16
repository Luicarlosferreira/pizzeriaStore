import { CartContainer } from "./styles";
import { Fade } from "react-awesome-reveal";
import { UseCartContext } from "../../hooks/useCartContext";

export const Cart = () => {
  const { products, clearCart } = UseCartContext();

  return (
    <Fade>
      <CartContainer>
        <div className="cartContent">
          <h1>Diga ao pizzaiolo quais pizzas você quer do carrinho!</h1>

          {Object.keys(products).map((item) => {
            const product = products[item];

            return (
              <div className="pedido" key={item}>
                <img src={product.product.image} alt="pizzas" />
                <h2>
                  #{product.product.id} - {product.product.name}
                </h2>
                <p>{product.product.description}</p>
                <p>Quantidade: {product.quantity}</p>
              </div>
            );
          })}
        </div>

        <button onClick={clearCart}>Limpar Carrinho</button>
      </CartContainer>
    </Fade>
  );
};
