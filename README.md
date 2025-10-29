Mini E-commerce Shopping Cart Simulation
A basic React application demonstrating core front-end architectural patterns, focusing on global state management for a shopping cart using the Context API.

✨ Features
-Product Listing: Displays a list of mock products (name, price, image).

-Dynamic Cart Management: Users can add or increment items directly from the product page.

-Real-time Total: The cart count in the header and the total price on the cart page update instantly.

-Quantity Control: The Cart Page allows users to update item quantities or remove items entirely.

-Responsive UI: Styled with Tailwind CSS for a clean, modern, and mobile-friendly interface.


-Core Concepts Mastered
-This project is built specifically to demonstrate a strong command of the following essential React concepts:


| Concept | Description |
| :--- | :--- |
| **React Context API** | Used to create a global, centralized store for the cart state, ensuring a single source of truth for the entire application. |
| **Props Drilling Elimination** | Achieved by using the custom **`useCart()`** hook, allowing deep components to access global data without passing props down. |
| **Component Composition** | The UI is structured logically using reusable, focused components (`ProductCard`, `CartItem`). |
| **State Management** | Effective use of **`useState`** for mutable data and **`useMemo`** for optimized dynamic calculations (like the order total). |
| **Routing** | Utilizes **React Router DOM** for smooth, client-side navigation. |
