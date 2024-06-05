/*Create a function that takes a product object as an argument and returns a string that includes
the product name, price, and a message based on whether it is in stock or not.*/

const formatProduct = ({ name, price, inStock }) =>
  `${name} costs INR ${price} and ${inStock ? "in stock" : "not in stock"}`;

const product = {
  name: "Socks",
  price: 249,
  inStock: false,
};
const message = formatProduct(product);
console.log(message);
