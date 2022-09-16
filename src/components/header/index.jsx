import { HeaderContent } from "./styles";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../hooks/useCartContext";

export const Header = () => {
  const { products } = UseCartContext();

  const itensCount = Object.keys(products).reduce((prev, curr) => {
    return prev + products[curr].quantity;
  }, 0);
  return (
    <HeaderContent>
      <div>
        <Link to="/menu">
          <img src="logo.png" alt="logo site" />
        </Link>
      </div>
      <div>
        <ul>
          <Link to="/about">ABOUT</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/cart" className="cartValue">
            CART {itensCount > 0 && <span>({itensCount})</span>}
          </Link>
        </ul>
      </div>
    </HeaderContent>
  );
};
