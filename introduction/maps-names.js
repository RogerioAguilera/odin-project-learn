let sara = {name: "Sara", age: 30, city: "New York"};
let john = {name: "John", age: 25, city: "Los Angeles"};

let users = [sara, john];

let names = users.map(user => user.name);

console.log(names); // Output: ["Sara", "John"]