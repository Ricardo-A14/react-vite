import { useState, useEffect } from "react";

import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import Layout from "../../Components/Layout";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
