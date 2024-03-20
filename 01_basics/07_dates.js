//dates

let myDate=new Date()
// console.log(typeof myDate)  //object
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())


let createdDate=new Date(2024,2,20) //0-january,1-february
// console.log(createdDate.toDateString())
// console.log(createdDate.toLocaleDateString())

let mycreatedDate=new Date("2024-02-20")  //1-january
// console.log(mycreatedDate.toDateString())

let myTimeStamp=Date.now() //calculate dates in milisecond from 1jan 1970
// console.log(myTimeStamp)
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))  // dates in seconds not in milisec


let newDate=new Date;
// console.log(newDate)
// console.log(newDate.getDay()) //0-monday 
// console.log(newDate.getMonth()) //0-jan

// `${newDate.getDay()}and time is..`  //string interpolation

newDate.toLocaleDateString('default',{
    weekday: "long",
})
