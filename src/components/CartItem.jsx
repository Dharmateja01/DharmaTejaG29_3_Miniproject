
// src/components/CartItem.jsx
import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition duration-100">
      <div className="flex items-center space-x-4">
        
        {/* 🛑 MODIFICATION: Use <img> tag to load the image URL */}
        <div className="w-16 h-16 flex items-center justify-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className="max-h-full max-w-full object-contain" 
            />
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} per unit</p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Quantity Input */}
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 p-2 border border-gray-300 rounded-lg text-center focus:ring-indigo-500 focus:border-indigo-500"
        />

        {/* Subtotal */}
        <p className className1="font-bold text-xl text-indigo-600 w-24 text-right">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition duration-150"
          aria-label="Remove item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 6h6v10H7V6z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;// // src/components/CartItem.jsx
// import { useCart } from '../context/CartContext';

// function CartItem({ item }) {
//   const { updateQuantity, removeFromCart } = useCart();

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     updateQuantity(item.id, newQuantity);
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition duration-100">
//       <div className="flex items-center space-x-4">
//         <div className="text-3xl">{item.image}</div>
//         <div className="flex flex-col">
//           <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//           <p className="text-sm text-gray-500">₹{item.price.toFixed(2)} per unit</p>
//         </div>
//       </div>

//       <div className="flex items-center space-x-6">
//         {/* Quantity Input */}
//         <input
//           type="number"
//           min="1"
//           value={item.quantity}
//           onChange={handleQuantityChange}
//           className="w-16 p-2 border border-gray-300 rounded-lg text-center focus:ring-indigo-500 focus:border-indigo-500"
//         />

//         {/* Subtotal */}
//         <p className="font-bold text-xl text-indigo-600 w-24 text-right">
//           ₹{(item.price * item.quantity).toFixed(2)}
//         </p>

//         {/* Remove Button */}
//         <button
//           onClick={() => removeFromCart(item.id)}
//           className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition duration-150"
//           aria-label="Remove item"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 6h6v10H7V6z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartItem;