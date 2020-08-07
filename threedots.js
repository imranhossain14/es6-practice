const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 66, 44, 99];
// previous system
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
// add another age in array
const allAges2 = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges2);
// another way
const allAges3 = [ages, ages2,5, ages3];
console.log(allAges3);

// ES6 way -> "Spread Operator"
const allAges4 = [...ages, ...ages2,5, ...ages3];
console.log(allAges4);

// Maxium ber korar easy system
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

// in case of array maximum 

const takaPoisa = [100, 2, 58, 214, 888];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);

