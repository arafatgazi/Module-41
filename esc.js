
// 1.Template string 
const numbers=[89,35,98,12];
const student={
    name:'sakib khan',
    age:32,
    movies:['king khan','dhakar mastan']
}
const about=`My name is${student.name} has number ${numbers[2]} also light movies ${student.movies[0]}`;
console.log(about);
// 2.arrow function 
const getFiftyFive=()=>55;
const addsixtyfive=num=>num +65;
const isEven=x=>x % 2 ==0;
const addThree=(x,y,z)=>x+y+z;

// / spread operator
// create an new array from an older array and add an element 
const currentNumbers=[...numbers,55];
console.log(numbers);
console.log(currentNumbers);

