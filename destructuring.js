// destructuring are two kind is 
// 1.array destructuring
// 2.object destructuring
// 1.array 
const numbers=[42,65];
const[x,y]=[42,65];
const[x,y]=numbers;
 function boxify(num1,num2){
     const nums=[num1,num2];
     return nums;
 }
 const[first,second]=boxify(43,76);
 const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}
const[firstmovie,secondmovie]=student.movies;


// object destructuring 
// generally object e property name golo die destructuring kra history. 
const{name,age}={name:'alu',age:34};
const{name,age}={id:12,name:'alu',salary:3400};

const employee={
    ide:'VS Code',
    designation:'developer',
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        adderss:'latuputu',
        drink:'water'
    }
}
const{machine,ide}=employee;
const {weight,address}=employee.specification;