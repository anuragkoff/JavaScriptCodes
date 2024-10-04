// ["", "", ""]  --> array of strings
// [{}, {}, {}]  --> array of objects

const arr = [1, 2, 3 ,4, 5]

// for of
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Good Morning"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is ${greet}`);
}

// maps
const map = new Map();