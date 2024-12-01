// const person1={
//      personName:"sanjay",
//      age:"21",
//      gender:"male"
// }
// const person2={
//     personName:"Harkirat",
//     age:"21",
//     gender:"male"
// }


const allUser=[
    {
        name:"sanjay",
        age:21,
        gender:"male"
    },
    {
        name:"parth",
        age:22,
        gender:"male"

    },
    {
        name:"taniya",
        age:22,
        gender:"female"
    }

]

for(let i=0;i<allUser.length;i++){
    if(allUser[i].gender=="male"){
        console.log(allUser[i]);
    }
}