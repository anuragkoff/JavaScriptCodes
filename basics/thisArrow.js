// about 'this' and 'arrow' function

// 'this' tells about current context

const user = {
    username: "Anurag",
    enroll: 6061,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // prints the current context , returns window in browser
        
    }
}

user.welcomeMessage()

// returns an empty object
console.log(this);

// printing this in a function returns many values such as global, Interval
// function context() {
//     console.log(this);
// }
// context()

//Implicit return
//const addTwo = (a, b) => a+b;  // we can use paranthesis if used curly braces - have to use return

const addTwo = (a,b) => ({username: "Anurag@123"})  // if we want to return an object, we have to use curly braces under parenthesis
console.log(addTwo(2,9));

//Explicit return is when you use return keyword