// to turn in to stringify 
// const studentjson=JSON.stringify(student);

// const studentobj=JSON.parse(studentjson);
const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}
const keys=Object.keys(student);
// tahele keys sdu ekta property name er array dei 
const values=Object.values(student);
// tahale value sdu property goloe value dei 
console.log(values);

// for of loop{
//     const number of numbers
//     eta use kra hoi 
//     // for of on array like 
// } 
// for in loop{
//     const number in numbers
//     loop on an object using for in 
// }
const products=[
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'phone',price:7000,brand:'i-phone',color:'golden'},
    {name:'watch',price:3000,brand:'Casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'ribom',color:'black'},,
    {name:'camera',price:4000,brand:'canon',color:'gray'} 
];
const newproduct={name:"web cam",price:4000,brand:'lala'};
// copy products array and then add newproduct 
const newproducts=[...products,newproduct];
// create a new array without one specificitem 
// remove phone means create a new array without

const remaining=products.filter(p=>p.nama !=='phone')