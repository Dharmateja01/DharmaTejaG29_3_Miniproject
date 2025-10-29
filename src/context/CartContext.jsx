// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // --- Dynamic Calculations ---

  const cartTotal = useMemo(() =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const totalItems = useMemo(() =>
    cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const contextValue = useMemo(() => ({
    cartItems,
    cartTotal,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  }), [cartItems, cartTotal, totalItems]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}