import { useState, useEffect, useContext } from "react";

import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import Layout from "../../Components/Layout";

import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const [items, setItems] = useState([]);
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        return setItems(data);
      });
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
