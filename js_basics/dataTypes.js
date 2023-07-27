// alert(3+3)  we are using nodejs not browser
// console.log(3+3)
// console.log(typeof "car");

const id=Symbol('123');
const id1=Symbol('123');

console.log(id===id1)

let big=11111111111111111111111111111111111n
console.log(typeof big);

let userOne={
    name:"priyanshu",
    age:19

}

let userTwo=userOne
userTwo.age=20
console.log(userTwo);
console.log(userOne);