// //syntax of arrays

// const personArray=["Harkirat","Raman","Priya"];
// const genderArray=["male","male","female"];

// for(let i=0;i<genderArray.length;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }


// //Objects

// const user1={
//     firstName:"Harkirat",
//     gender:"male"
// }
// console.log(user1.firstName);
// console.log(user1["gender"]);
// console.log(user1["firstName"]);


// //Array of Numbers:
// const userss=[1,2,3];
// //Array of strings
// const user2=["sanjay","Harkirat"];

//Array of objects:
const allUsers=[{
    firstName:"sanjay",
    gender:"male"
}, {
    firstName:"arun",
    gender:"male"
}, {
    firstName:"taniya",
    gender:"female"
}]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]);
    }

}
