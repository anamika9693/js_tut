const name='anamika'
const repoCount=60
// console.log(name+repoCount+" value")  //not recomend to use


// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)// use back text ->string interpolation


const gameName=new String("anamika-hc-com");  //form of string declaration : return type is an obj
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('i'))

const newString=gameName.substring(0,4) // agr neg value di to vo postive consider kregaa
// console.log(newString)

const another_string=gameName.slice(-8,4) // negative meand peeche se index count krna start kregaa
// console.log(another_string)


// const newStringone="  ansmikas  "
// console.log(newStringone)
// console.log(newStringone.trim())


const url="https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20','-'))
// console.log(url.includes('ansmika')) //false

console.log(gameName.split('-')) //converting string into array of strings with the separator '-'