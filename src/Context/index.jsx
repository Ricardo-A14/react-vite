import { createContext, useState, useEffect } from "react";

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

  const [items, setItems] = useState([]);

  const [filteredItems, setFilteredItems] = useState("");

  const [searchByTitle, setSearchByTitle] = useState("");

  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        return setItems(data);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => {
      return item.title.toLowerCase().includes(searchByTitle.toLowerCase());
    });
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle)
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }

    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    }

    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    }

    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
