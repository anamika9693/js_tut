const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros=[...marvel_heros,...dc_heros]  //spred out-> glass pe neeche girayenge to individual element me tut jaayenge
// console.log(all_new_heros)


const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]];
const real_another_array=another_array.flat(Infinity);   
// console.log(real_another_array)


// console.log(Array.isArray("anamika"))  //false;
//convert into array
// console.log(Array.from("anamika"))
// console.log(Array.from({name:"anamika"}))   //interesting case for interview: cant form array(key-value array) then o/p: empty array


let score1=1930
let score2=39535
let score3=9759983

console.log(Array.of(score1,score2,score3))



