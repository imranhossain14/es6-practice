function add(num1, num2=20){
    
   // num2 = num2 || 20 ;
   
//    or if(num2==undefined){
//         num2 = 0;
//     }
    
    return num1 + num2 ;

}

const total = add(15);
console.log(total);