const myObj = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    rb: "Ruby"
}
// we cannot iterate through forOf so we used forIn

for (const key in myObj) {
    // console.log(key);   
}

const prog = ['js', 'java', 'py', 'c', 'c++']
for (const key in prog) {
    // console.log(key) // returns index
    console.log(prog[key]);
}