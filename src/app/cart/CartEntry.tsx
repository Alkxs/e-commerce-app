"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import Image from "next/image";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

const CartEntry = ({ cartItem: { product, quantity } }: CartEntryProps) => {
  return (
    <div>
      <div className="itcem flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="divider" />
    </div>
  );
};
export default CartEntry;
