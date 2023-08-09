import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Your Cart - ShopyBy",
};

const CartPage = async () => {
  const cart = await getCart;

  return (
    <div className="mb-6 text-3xl font-bold">
      Shopping Cart
      {/* {cart?.items.map((cartItem) => (
        <CartEntry cartItem={cartItem} key={cartItem.id} />
      ))} */}
    </div>
  );
};

export default CartPage;
