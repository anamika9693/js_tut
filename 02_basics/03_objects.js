// singlton : apne trh ka srf ik hi object bnata hai--------constructor-> singlton, leteral->no singlton
// Object.create()   //constructor method

const mysym=Symbol("key1")  //use this symbol in object and print its value

//object literals
const JsUser={
    name:"anamika",  //name taken as stirng by default
    "full_name":"anamika priya", // cant access by the .(dot operator)
    [mysym]:"mykey1",  // adding[] to mysym consider as symbol o/w stirng as the datatype
    age:20,
    location:"allahabad",
    email:"anamika@google.com",
    isLoggedin:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.age)

//best way to access object values
// console.log(JsUser["full_name"])
// console.log(typeof JsUser.mysym)   
// console.log(JsUser[mysym])


JsUser.email="oqihfoils@google.com"  //can update the value also
// Object.freeze(JsUser)   //to freez a particular object-> vlaue cant get change further: see example of the email
JsUser.email="iit22432@iiita.ac.in"
// console.log(JsUser)


//function as variable---- freez mtt krna object ko function run kraane ke liye
JsUser.greeting=function(){
    console.log("hello jsUser");
}


JsUser.greetingTwo=function(){
    console.log(`hello jsUser,${this.location}`);
}


// console.log(JsUser.greeting)   // fxn doesnot get exicuted--o/p as reference of funtion only
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())