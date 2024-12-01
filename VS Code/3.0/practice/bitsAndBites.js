// const binaryRepresentation=new TextEncoder().encode("h");
// console.log(binaryRepresentation); 


// const arr=new Uint8Array([1919]);
// console.log(arr);


// array

let person1="harkirat";
let person2="sanjay";
let person3="Arpit";
// or
const personArray=["harkirat","sanjay","arpit"];

console.log(personArray[0]);

console.log(personArray[1]);

console.log(personArray[2]);

const ages=[21,22,23,24,25];
//to print ages which are even.
for(let i=0;i<ages.length;i++){
    if (ages[i]%2==0){
        console.log(ages[i]);
    }
}

