import React, { useReducer } from 'react';
import { initialCartState } from './cartReducer';
import cartReducer from './cartReducer';

// Sample product data
const products = [
  { id: 1, title: 'Product 1', price: 100 },
  { id: 2, title: 'Product 2', price: 200 },
  { id: 3, title: 'Product 3', price: 300 },
];

export default function ShoppingCart() {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addItemToCart = product => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItemFromCart = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: Math.max(0, quantity) } });
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.title} - ${product.price}
          <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cartState.items.map(item => (
        <div key={item.id}>
          {item.title} - ${item.price} x {item.quantity}
          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
