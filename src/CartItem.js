import React from "react";

import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const subractOne = () => updateQty(id, qty - 1);

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button onClick={subractOne} disabled={qty <= 0}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div className="Cart-Item-Total">Total: ${qty * price}</div>
    </div>
  );
}

export default CartItem;
