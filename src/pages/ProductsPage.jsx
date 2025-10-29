// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react'; // <-- ADD useState and useEffect
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. EFFECT: Use useEffect to run the fetching function once on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use a public API, e.g., FakeStoreAPI
        const response = await fetch('https://fakestoreapi.com/products?');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Map the fetched data to ensure prices are reasonable for the Rupee display
        const formattedProducts = data.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price * 50, // Convert price to a higher value for Rupee simulation
          image: product.image, // Using the image URL from the API
        }));
        
        setProducts(formattedProducts);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // <-- Empty dependency array [] means run only once

  // 3. CONDITIONAL RENDERING: Handle loading and error states
  if (loading) {
    return <div className="text-center p-10 text-2xl font-semibold">Loading Products...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-xl text-red-600">Error: {error}</div>;
  }
  
  // 4. RENDER PRODUCTS: If successful, display the fetched products
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
// // src/pages/ProductsPage.jsx
// import ProductCard from '../components/ProductCard';
// import { products } from '../data/products';

// function ProductsPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Available Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsPage;