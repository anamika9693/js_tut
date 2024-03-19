let score="33abc"
// console.log(typeof score);

let valueInNum=Number(score); //string->num
// console.log(valueInNum);  // 33abc->not a num (NaN)
// console.log(typeof valueInNum);

let ss=null
let vary=Number(ss)  //null->0 issue in js
// console.log(vary);

let an=undefined
let any=Number(an);
// console.log(any);

//  "33"->33  
//   "33abc"->NaN
//   true->1
//   falsq->0

let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  //""->false; "anaskg"->true 1->true 0->false

let someNum=33;
let inString=String(someNum);
// console.log(typeof inString);


let value=33;
let negValue=-value;
// console.log(negValue);

// console.log(2**4) //2^4=16

let first="anamika"
let last=" priya"
let full=first+last;
// console.log(full);  //cpncationation

// console.log("1"+2) //12
// console.log(1+"2") //12
// console.log("1"+2+2)  //122
// console.log(1+2+"2");   //32

// console.log(+true)  //1
// console.log(+"") //0




