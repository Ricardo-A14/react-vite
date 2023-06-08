import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../OrdersCard";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center w-80">
        <p>My Orders</p>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
