import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetaiOpen, setIsProductDetaiOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState({});

  const openProductDetail = () => setIsProductDetaiOpen(true);
  const closeProductDetail = () => setIsProductDetaiOpen(false);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
