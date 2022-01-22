// const character = "#";
// let row = " ";

// for (let i = 1; i <= 5; i++) {
//   row = row + character;
//   console.log(row);
// }

// //object is a variable with keys and values
// //keys are properties of the object
// let player = {
//   name: "Manny",
//   height: 67,
//   position: "point guard",
//   starter: true,
//   avgPointsPerGame: 20,
// };
// console.log(player.name);

function assignGrade(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score < 90 && score >= 80) {
    console.log("B");
  } else if (score < 80 && score >= 70) {
    console.log("C");
  } else if (score < 70 && score >= 60) {
    console.log("D");
  } else if (score < 60) {
    console.log("F");
  }
}
assignGrade(54);

function assignGrade(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else if (score < 60) {
    console.log("F");
  }
}
assignGrade(64);
