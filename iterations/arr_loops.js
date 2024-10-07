// ["", "", ""]  --> array of strings
// [{}, {}, {}]  --> array of objects

const arr = [1, 2, 3 ,4, 5]

// for of
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Good Morning"
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each char is ${greet}`);
// }

// maps
const map = new Map();
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map)

// for (const key of map) {
//     console.log(key);
// }

// destructuring the map
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    "game1": "NFS",
    "game2": "PS5",
    "game2": "GTA Vice City"
}
// cannot iterate object same as map

// for (const value of myObj) {
//     console.log(value);
// }
