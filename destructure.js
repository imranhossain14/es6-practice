const person = { name : "Imran" , age : 17, job : 'Facebooker', company : 'Ipdc', address : "dhaka", phoneNumber : 0171234567, friends : ['Tom', 'Jerry']};
// jodi address dekhte chai


const address = person.address;
const phone = person.phoneNumber;
//console.log(address, phone);

// Easy Method

const {name, company} = person;
console.log(name, company);



//array
const friends = ['Amir Khan',' Salman Khan','Sharukh Khan','Saif Ali Khan'];
//const [chotoFriend, nextFriend] = friends; // first one niye nibe
//console.log(chotoFriend);
//console.log(chotoFriend, nextFriend);
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends); 

const complexObject = {
    name : 'abc',
    info: {
        address :'jatrabari',
        leader : 'Tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader); 