/* Write a function that uses destructuring to extract the first two elements from an array, and
returns them in an object with keys 'first' and 'second'. */

const pickFirstAndSecond = (items) => {
  const [first, , second] = items;
  return {
    first: first,
    second: second,
  };
};

console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}
