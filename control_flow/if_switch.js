const a = 400;

if (a>300) {
    console.log(`The value of a '${a}' is greater than 300`);
    
} else {
    console.log(`The value of a: '${a}' is smaller or equal to 300`);
}

switch (a) {
    case 100:
        console.log(`value of a is ${a}`);
        break;
    case 400:
        console.log(`value of a is ${a} in switch.`);
        break;

    default:
        break;
}