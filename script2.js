const originalArray = [1, 2, 3];
const copiedArray = originalArray.map((element) => element); // Creates a new array with the same values
console.log(copiedArray); // Output: [1, 2, 3]
console.log(originalArray === copiedArray); // Output: false (they are different arrays in memory)

// Mapping an Array

function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// Filtering an Array

function lCat(cat) {
  return cat.startsWith("L");
}

const cat = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cat.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
