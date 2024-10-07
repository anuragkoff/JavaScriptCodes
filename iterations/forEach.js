const coding = ['js', 'java', 'py', 'c', 'c++']

// coding.forEach( (item)=> console.log(item) )

function PrintMe(item) {
    console.log(item);
    
}
// coding.forEach(PrintMe)  // giving only the reference of the function

coding.forEach( (item, index, arr) => console.log(item, index, arr) )
 
const myCoding = [
    {
        languageName: "JavaScript",
        languageFN: ".js"
    },
    {
        languageName: "Java",
        languageFN: ".java"
    },
    {
        languageName: "Python",
        languageFN: ".py"
    }
]

myCoding.forEach( (item) => {
    console.log(`Language is ${item.languageName} & its filename is ${item.languageFN}`)
} )