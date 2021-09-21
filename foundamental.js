// 1.How To Declare Const And Let
const fathersName='Shamsul Haque';
let season='rainy';
season='winter'
// 2.conditon 
// 2.6 basic condition :>,<,<=,>=,===,!== 
// Multiple conditon:&&,|| 
if(fathersName === 'shamsul Haque' || season ==='rainy'){

}
else if(fathersName ==='Shamsul Haque'){

}
else{

}
// // 3.array 
// index
// length,push,pop,includes
const numbers=[89,35,98,12];
numbers[0]=56;
// 4.loop 
for(let i=0;i<numbers.length;i++){
    const number=numbers[i]
    console.log(number);
}
// 5.function 
function multifly(num1,num2){
    const result=num1 *num2;
    return result;
}
const ourput=multifly(35,78);
// 6.object 
const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}
const ages='age';
console.log(student.name); 
// direct by property
console.log(student['age']);
// access via property name string
console.log(student['ages']);
