const hubby = "ELian Kanchon"; // fixed value 
console.log(hubby);

// Incase of Array
const numbers = [12, 45]; // array er item gula change kora jabe. but whole array change kora jabena like string array korar try korlam
numbers[1] = 88;
numbers.push(99);
console.log(numbers);

// Incase of Object
const  nayok = {name : "sakib khan", phone:11111}; // ekta kore elemet change / update kora jabe. new prorperty add kora kabe
// but naypk variable ta purata change korte parbona

let patientName = "Rahim Chacha"; // value change kora jay
patientName = "Fatema Khala";
console.log(patientName);

// let is call scope variable 

let sum = 0 ;
for (let i = 0; i < 10; i++) {  // let r baire console kora jabena. karon scope er baire jabena. leak hobe
    sum+=i;
}
console.log(i);
