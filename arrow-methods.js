const products=[
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'phone',price:7000,brand:'i-phone',color:'golden'},
    {name:'watch',price:3000,brand:'Casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'ribom',color:'black'},,
    {name:'camera',price:4000,brand:'canon',color:'gray'} 
];
// 1.map 
const brands=products.map(product=>product.brand)
// etai ekta Array create hoe output dive 
// console.log(brands);
// 2.map 
products.forEach(product=>console.log(product.color));
// array chara output dive 
// 3.filter 
const cheap=products.filter(product => product.price <=5000)
// console.log(cheap);
// 4.includes 
const specialname1=products.filter(p=>p.name.includes('n'));
// console.log(specialname);
// jdi array er name e n thakle oigolo output diva 
const specialname=products.find(p=>p.name.includes('n'));
// eta prothom jeta pabe ota output diva  
console.log(specialname);