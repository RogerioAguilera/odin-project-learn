let joao = { name: "Joao", surname: "Smalling", id: 1 };
let maria = { name: "Maria", surname: "Tobb", id: 2 };
let fabrina = { name: "Fabrina", surname: "Smith", id: 3 };

let users = [joao, maria, fabrina];


let usersMapped = users.map(user => ({ name: user.name }));

console.log(usersMapped[0].name);
console.log(usersMapped[1].name); 
console.log(usersMapped[2].name); 