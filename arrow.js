// function  doubleIt1(num) {
//     return num*2;
// }

// const result = doubleIt(5);
// console.log(result);

// better way

// const doubleIt2 = function (num) {

//     return num*2;
// }
// const result2 = doubleIt2(5);
// console.log(result2);


//ES6 way

const doubleIt3 = num=>num*2;
const result3 = doubleIt3(15);
console.log(result3);

const add =(x,y) => x+y;
const output = add(50,70);
console.log(output);

// no parameter

const give5 = () => 5;
const output2 = give5();
console.log(output2);

// boro function
const doMath = (x,y) => {
    const sum = x + y;
    const difference = x- y ;
    const result = sum * difference;
    return result;
}

const result4 = doMath(7,5);
console.log(result4);
