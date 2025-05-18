import { useState, useEffect } from 'react';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

function App() {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const savedCart = localStorage.getItem('cartData');
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  });

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(shoppingCart));
    const timer = setTimeout(() => {
      localStorage.removeItem('cartData');
    }, 1000 * 60);
    return () => {
      clearTimeout(timer);
    };
  }, [shoppingCart]);

  function clearCart() {
    setShoppingCart({ items: [] });
  }

  function updateItemQuantity(productId, changeInQuantity) {
    setShoppingCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      const itemIndex = updatedItems.findIndex(item => item.id === productId);

      if (itemIndex === -1) return prevCart;

      const item = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + changeInQuantity
      };

      if (item.quantity <= 0) {
        updatedItems.splice(itemIndex, 1);
      } else {
        updatedItems[itemIndex] = item;
      }

      return { items: updatedItems };
    });
  }

  function addProductToCart(product) {
    setShoppingCart((prevCart) => {
      const updatedItems = [...prevCart.items];
      const itemIndex = updatedItems.findIndex(item => item.id === product.id);

      if (itemIndex !== -1) {
        const updatedItem = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        updatedItems[itemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  }

  return (
    <div className="main-container">
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={updateItemQuantity}
        onClearCart={clearCart}
      />
      <GroceryList onAddToCart={addProductToCart} />
    </div>
  );
}

export default App;