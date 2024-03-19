
// #Primitive datatypes (call by value (give copy of that datatype to the fxn))

// 7types: stirng,Number,Boolean,null,undefined,symbol,bigint

//Reference type(non primitive)
//array,object,function

//js is a dynamic prog lang ->data type var ko dena nai pdta let/const se kaam hota

const id=Symbol('123')   //symbol give a unique return type of type symbol
const newId=Symbol('123')

console.log(id==newId)  //false

const bigNum=25416523165841n
console.log(typeof bigNum)

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

console.log(typeof null)  //object
console.log(typeof myFun)

//all non primitive datatype has return type as object