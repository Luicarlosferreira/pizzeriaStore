import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Menu } from "./pages/menu/index";
import { Cart } from "./pages/cart/index";
import { About } from "./pages/about/index";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
