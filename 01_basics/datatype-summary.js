
// #Primitive datatypes (call by value (give copy of that datatype to the fxn))

// 7types: stirng,Number,Boolean,null,undefined,symbol,bigint

//Reference type(non primitive)
//array,object,function

//js is a dynamic prog lang ->data type var ko dena nai pdta let/const se kaam hota

const id=Symbol('123')   //symbol give a unique return type of type symbol
const newId=Symbol('123')

// console.log(id==newId)  //false

const bigNum=25416523165841n
// console.log(typeof bigNum)

//Array
const heros=["saktiman","krish","nagraj", "doga"];
//object
let myobj={
    name:"Anamika",
    age:20
}

//functions as variable

const myFun=function(){
    console.log("Hello World")
}

// console.log(typeof null)  //object
// console.log(typeof myFun)  //return type is functional object

//all non primitive datatype has return type as object



//==========================================================================================



//memory allocation
//stack (primitive)->copy milti hai original value ki ,heap(non-primitive) ->reference milti hai to changes kuch kraa to direct original vlaue me change hoyegi


// let name="anamika"
// let another_name=name;
// another_name="saloni"

// console.log(name)
// console.log(another_name)


let userOne={
    email:"anamika@gmail.com",
    upi:"user@ybl"
}

// let userTwo=userOne
// userTwo.email="wrwetj@gmail.com" //pass by refernece hota hai to dono me hi value change ho jaayegi
// console.log(userOne.email)
// console.log(userTwo.email)


