## Outline
This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework. With this project you will practice how to:

Fetch Data within a React App
Use react-router-dom
Use Firebase/Firestore

## MVP
At a minimum your e-shop website should have two pages:

# Home Page
This will contain:
 - A Grid of products
 - Carousel of featured products
You can import something but I strongly recommend building it yourself

# Product Page (with id parameter)
Similar to a product page on another site, allows you to add to cart and select product variants

All products should be stored in Firestore:
You should store the following information:
- quantity
- variants (could be colors, sizes, etc)
- price per unit
- name
- image url
- favourited or not (boolean) All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

# Bonus
Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

You could use something like local/session storage to persist the cart

You could have a cart collection in firestore

List of products in cart

Ability to change quantity of products in cart
Ability to remove items from cart

# Other Bonuses
Build the app in TypeScript
Write at least 10 tests with react testing library
