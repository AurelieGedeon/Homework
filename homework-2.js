const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];
function howMany(a) {
  let counter = 0;
  for (bool of a) {
    if (bool) {
      counter++;
    }
  }
  return counter;
}

console.log(howMany(testArray));
console.log(testArray.includes(true, 0));

//count number of odds
const numArray = [3, 53, 4, 8, 11, 2];

counter = 0;
for (odds of numArray) {
  if (odds % 2 > 0) {
    counter++;
  }
}
console.log(counter);

const car = {
  make: "Honda",
  model: "Insight",
  year: 2020,
  color: "gray",
};
function getInfo(cars) {
  console.log(car.make, car.model);
}

getInfo();
const car = {
  make: "Honda",
  model: "Insight",
  year: 2020,
  color: "gray",
};
function getInfo(cars) {
  console.log(car.make, car.model);
}

getInfo();

let animals = ["dog", "cat", "elephant", "horse"];

function getPet() {
  console.log(animals[0]);
}
getPet();
