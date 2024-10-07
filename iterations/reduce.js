const arr = [1,2,3,4,6]

// const total = arr.reduce((acc, currV) => {
//     console.log(`acc: ${acc} & currV ${currV}`);
//     return acc+currV
// },0)

// const totalVal = arr.reduce((acc, currV) => acc+currV, 0) // also right

// console.log(totalVal);

const shoppingCart = [
    {
        course: "JS course",
        price: 2999
    },
    {
        course: "Digital Marketing",
        price: 1999
    },
    {
        course: "Life Guide",
        price: 5999
    }
]

const totalCoursePrice = shoppingCart.reduce( (acc, item) => acc+item.price, 0 )
console.log(totalCoursePrice);
