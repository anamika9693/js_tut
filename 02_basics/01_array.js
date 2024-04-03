//array : contain diff types of datatyped element and it is resizable in js
// array give shallow copy(same) reference  //bring any changes get reflect in original array
// decopy donot share the same reference


const arr=[5,7,1,2,7,89]
const myHero=["Shaktiman","nagarjun"]

const arr2=new Array(4,5,2,6,7,4,5)
// console.log(arr2[9])

//=======array_methods=================================================

// arr.push(34)  //push at last
// arr.push(67)
// arr.pop()  //last ele get removes


// arr.unshift(753)  //shift all ele and add 753 at begningin
// arr.shift()      //remove the first ele

// console.log(arr.includes(45))
// console.log(arr.indexOf(76))


const newArr=arr.join()  //array to string

console.log(newArr);
console.log(arr)



