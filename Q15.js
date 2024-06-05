/* Create a function which takes a product object and returns a sentence about the product using
ES6 features. */

const printProductDetails = ({
  name,
  specification: { capacity, size },
  price,
}) => `The ${size} ${name} with ${capacity} storage costs ${price}.`;

const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};
console.log(printProductDetails(product));
// The 13.3 Inch Apple MacBook Air 2020 with 256GB storage costs ₱82,900.
