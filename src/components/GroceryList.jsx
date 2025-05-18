import { useState, useEffect } from 'react';
import CategoryFilter from './products/CatergoryFilter';
import Product from "./products/Product";

function GroceryList({ onAddToCart }) {
  const [products, setProducts] = useState(null);
  const categories = products
    ? ['ALL', ...new Set(products.map(product => product.category))]
    : [];
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    const loadProducts = () => {
      import('../products').then((module) => {
        setProducts(module.products);
      });
    };

    loadProducts();
  }, []);

  if (!products) {
    return <p>Loading products...</p>;
  }

  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="grocery-list">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ul id="products">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={() => onAddToCart(product)} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GroceryList;