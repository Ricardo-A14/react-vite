import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  const context = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-2 top-0 w-full py-5 px-8 text-sm font-light border-b border-black bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li> */}

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furniture")}
          >
            Furnitures
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
          >
            Toys
          </NavLink>
        </li> */}

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink>mail@example.com</NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/my-orders"
          >
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="my-account"
          >
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="sign-in"
          >
            Sign In
          </NavLink>
        </li>

        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
