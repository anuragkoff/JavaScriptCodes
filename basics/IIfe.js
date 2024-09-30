// Immediately Invoked function Expression (IIFE)
// we use iife to remove the problems which are created by global scope pollutions

(function connect() {
    console.log(`DB Connected...`);
    
})(); // write the func inside the parenthesis and one more to call the function.
// strictly use semicolon because it doesn't know where to stop