const userEmail = "anurag@hello"
// assuming that the value of the string userEmail would be true
if (userEmail) {
    console.log("Got the email.");
} else {
    console.log("Not have the email.");   
}



// NULLISH COALESCING OPERATOR (??): null undefined
let val = 5 ?? 10
console.log(val); //5

// sometimes when we call from database like firebase etc. it does not response directly and returns two values,
// there is chance of getting a null response or undefined
