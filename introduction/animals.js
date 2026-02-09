let animal = {
  name: "Mittens",
  species: "Cat",
  age: 3,
  isPet: true,
  favoriteFoods: ["fish", "chicken", "catnip"],
  makeSound: function () {
    console.log("Meow!");
  },
};

console.log(animal.name); // Output: Mittens
console.log(animal["species"]); // Output: Cat
animal.makeSound(); // Output: Meow!