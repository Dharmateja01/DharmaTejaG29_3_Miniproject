// src/components/ProductCard.jsx
import React, { useState } from 'react'; 
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart(); 
  const [isConfirmed, setIsConfirmed] = useState(false); 

  const handleAddToCart = () => {
    addToCart(product);

    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      
      {/* Image display using API URL (No Change) */}
      <div className="mb-4 w-full h-32 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain" 
          />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{product.name}</h3>
      
      {/* Price display (No Change) */}
      <p className="text-2xl font-bold text-green-600 mb-4">
        ₹{product.price?.toFixed(2)} 
      </p>
      
      {/* MODIFIED BUTTON: Calls handleAddToCart and uses conditional styling/text */}
      <button
        onClick={handleAddToCart}
        // Conditional styling based on the confirmation state
        className={`w-full py-2 rounded-lg font-medium transition duration-200 ${
          isConfirmed 
            ? 'bg-green-500 text-white cursor-default' // Confirmation style (Green Flash)
            : 'bg-indigo-600 text-white hover:bg-indigo-700' // Normal style
        }`}
      >
        {/* Conditional text display */}
        {isConfirmed ? '✅ Item Added!' : 'Add to Cart'}
      </button>
      
    </div>
  );
}

export default ProductCard;
// // src/components/ProductCard.jsx
// import { useCart } from '../context/CartContext';
// // REMOVED: import { formatRupee } from '../utils/currencyFormatter';

// function ProductCard({ product }) {
//   // We only need addToCart to allow multiple clicks (to increment quantity).
//   const { addToCart } = useCart(); 

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      
//       {/* Image display using API URL */}
//       <div className="mb-4 w-full h-32 flex items-center justify-center">
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className="max-h-full max-w-full object-contain" 
//           />
//       </div>
      
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{product.name}</h3>
      
//       {/* FIXED: Price display using simple .toFixed(2) */}
//       <p className="text-2xl font-bold text-green-600 mb-4">
//         {/* Use optional chaining (?) in case product.price is undefined during API load */}
//         ₹{product.price?.toFixed(2)} 
//       </p>
      
//       {/* Button logic remains simple to increment quantity */}
//       <button
//         onClick={() => addToCart(product)}
//         className="w-full py-2 rounded-lg font-medium transition duration-200 bg-indigo-600 text-white hover:bg-indigo-700"
//       >
//         Add to Cart
//       </button>
      
//     </div>
//   );
// }

// export default ProductCard;
//------------------------------------------------------------------------------------------------------
// // src/components/ProductCard.jsx
// import { useCart } from '../context/CartContext'; // Assumes you kept the formatter utility

// function ProductCard({ product }) {
//   // We only need addToCart to allow multiple clicks (to increment quantity).
//   const { addToCart } = useCart(); 

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      
//       {/* 🛑 CHANGE 1: Displaying the image from the API URL */}
//       <div className="mb-4 w-full h-32 flex items-center justify-center">
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className="max-h-full max-w-full object-contain" 
//           />
//       </div>
      
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{product.name}</h3>
      
//       {/* 🛑 CHANGE 2: Displaying the Rupee Price */}
//       <p className="text-2xl font-bold text-green-600 mb-4">
//         {/* Use the formatter for clean Rupee display */}
//         {formatRupee(product.price)}
//       </p>
      
//       {/* 🛑 CHANGE 3: Simplified Button (Allows Multiple Clicks to Increment Quantity) */}
//       <button
//         // Calling addToCart increments quantity if item exists (logic is in CartContext)
//         onClick={() => addToCart(product)}
//         className="w-full py-2 rounded-lg font-medium transition duration-200 bg-indigo-600 text-white hover:bg-indigo-700"
//       >
//         Add to Cart
//       </button>
      
//     </div>
//   );
// }

// export default ProductCard;
//------------------------------------------------------------------------------------------------------
// // src/components/ProductCard.jsx
// import { useCart } from '../context/CartContext';

// function ProductCard({ product }) {
//   const { addToCart, cartItems } = useCart();
//   const isInCart = cartItems.some(item => item.id === product.id);

//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
//       <div className="mb-4 w-full h-32 flex items-center justify-center">
//     <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
//       </div>
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
//       <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price.toFixed(2)}</p>
//       <button
//         onClick={() => addToCart(product)}
//         className={`w-full py-2 rounded-lg font-medium transition duration-200 ${
//           isInCart 
//             ? 'bg-gray-400 text-white cursor-not-allowed'
//             : 'bg-indigo-600 text-white hover:bg-indigo-700'
//         }`}
//         disabled={isInCart}
//       >
//         {isInCart ? 'Added to Cart' : 'Add to Cart'}
//       </button>
//     </div>
//   );
// }

// export default ProductCard;