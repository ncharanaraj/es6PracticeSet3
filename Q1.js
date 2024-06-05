/* 1. Create a function that takes an array of strings as an argument and returns a string that includes
the number of items in the array and the first and last items. */

const formatArray = (item) =>
  `The array has ${items.length} items, and the first item is "${
    item[0]
  }", and the last item is "${item[items.length - 1]}"}`;

const items = ["apple", "banana", "orange"];
const message = formatArray(items);
console.log(message);
