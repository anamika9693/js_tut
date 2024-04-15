// const tinderUser=new Object()  //o/p:{}--- a singlton obj
const tinderUser={}    //o/p:{}----- non singleton obj
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
          username:{
            firstName:"Anamika",
            lastName:"Priya"
          }
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.username.firstName)

const obj1={1:"anamika" , 2:"priya"}
const obj2={3:"ayush", 4:"ranjan"}

// const obj3={obj1,obj2}; // return a object within object
// console.log(obj3)

// const obj3=Object.assign({}, obj1,obj2) // obj1 ans obj2 merge into {} not in obj1
// console.log(obj3)

const obj3={...obj1,...obj2}  //most used syntax
// console.log(obj3)

// console.log(Object.keys(tinderUser))  //o/p: all keys of obj and return type is array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // 1st->key , 2nd->vlaue


// console.log(Object.hasOwnProperty('isLoggedin'))  // use to test whether this property exist or not



const course={
  coursename:"js in hindi",
  price:9858,
  courseInstructor:"hitesh"
}

//couse.courseInstructor
//destructuring of objects

// const {courseInstructor,price}=course
const {courseInstructor:inst}=course // rename 
// console.log(price)
console.log(inst)


