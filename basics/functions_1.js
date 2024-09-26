// let a = (n,m) => m * n;
// console.log(a(3,4));

// function add(b,c) {
//     return b+c;
// }

// let res = add(3, 9);
// console.log(res);

// function UserLogin(username = "NoOne") {  // this username = "NoOne" defines, if nothing is given by user take NoONe as default 
//     console.log(`${username} just logged in.`)
// }

// UserLogin()

function calculateCartPrice(...num1) {  //rest operator allows you to take multiple arguments and turns into array
    return num1;
}
console.log(calculateCartPrice(100, 200, 500, 2000));

const user = {
    course: "Placement",
    price: 199
}

function handleObject(anyObj) {
    console.log(`The course is ${anyObj.course} and the price is ${anyObj.price}.`);
    
}
console.log(handleObject(user));
