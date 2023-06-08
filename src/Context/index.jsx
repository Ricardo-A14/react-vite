import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const [isProductDetaiOpen, setIsProductDetaiOpen] = useState(false);
  const openProductDetail = () => setIsProductDetaiOpen(true);
  const closeProductDetail = () => setIsProductDetaiOpen(false);

  const [isCkeckoutSideMenuOpen, setIsCheckouSideMenutOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckouSideMenutOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckouSideMenutOpen(false);

  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetaiOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCkeckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
