/* Write a function to return the last 5 characters as an array from the given array. */

const printLastFive = (arr) => {
  let newArr = [];
  for (let i = arr.length - 5; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]
