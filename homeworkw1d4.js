//Problem #1

for (let i = 10; i > 0; i--) {
  if (i !== 0) {
    console.log(i);
  }
  if (i === 1) {
    console.log("BLAST OFF!");
  }
}

//Farrukh's way
let count = 10;
let timer = count;

for (let i = 0; i < timer; i++) {
  console.log(count);
  count--;
  if (i === timer - 1) {
    console.log("BLAST OFF!");
  }
}

//Problem #2
//With .min and .max
const testArray = [25, 24, 33, 41, 5, 17, 88];

let minAndMax = [Math.min(...testArray), Math.max(...testArray)];
console.log(minAndMax);

//Without .min and .max
function getMinAndMax(array) {
  let min = array[0];
  let max = array[0];
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  return (result = [min, max]);
}
console.log(getMinAndMax(testArray));

//Using sort
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(findMinMax(testArray));

//Problem #3
let string = "WHAT a TIME to BE ALIVE!";
let upperCase = string.toUpperCase();
console.log(upperCase);

for (let i = 1; i < 17; i++) {
  if (i >= 0) {
    console.log(i);
  }
}
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 16);
