let silva = { name: "Silva", age: 28 };
let roger = { name: "Roger", age: 30 };
let luisa = { name: "Luisa", age: 25 };

let arr = [silva, roger, luisa];

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name); 
console.log(arr[2].name); 