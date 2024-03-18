let score="33abc"
console.log(typeof score);

let valueInNum=Number(score); //string->num
console.log(valueInNum);  // 33abc->not a num (NaN)
console.log(typeof valueInNum);

let ss=null
let vary=Number(ss)  //null->0 issue in js
console.log(vary);

let an=undefined
let any=Number(an);
console.log(any);

//  "33"->33  
//   "33abc"->NaN
//   true->1
//   falsq->0

let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //""->false; "anaskg"->true 1->true 0->false

let someNum=33;
let inString=String(someNum);
console.log(typeof inString);
