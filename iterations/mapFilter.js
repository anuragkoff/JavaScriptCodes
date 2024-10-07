const coding = ["js", "python", "C", "C++", "Java", "Ruby"]

const numbers = [1,2,3,4,5,6,7,8,9,10]


// for each doesn't return any values

// const values = coding.forEach( (item)=> process.stdout.write(item + " "))

// the value of "values" is undefined

// console.log(values)

// FILTER
const value = numbers.filter((num)=> num%2==0 )
// console.log(value);  // [2, 4, 6, 8, 10]

//MAP
const mapValue = numbers.map( (item) => item + 10 )
// console.log(mapValue)

//  CHAINING
const newVal = numbers.map((n)=> n*2)   // executes first
.filter((m) => m>11 )   // executes 2nd
.map((a) => a+1 )       // executes 3rd

console.log(newVal);


// we can print in one line after using "process.stdout.write() ".