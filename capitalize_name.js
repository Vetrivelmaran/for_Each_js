// Write a function that takes an array of objects with a name property and returns a new
// array of strings with the name of each object capitalized. Use the Map object to
// accomplish this.
let a=[{name:'vetri',age:23},{name:'david',age:34}]
let r=a.map(e=>{
    return e.name.charAt(0).toUpperCase()+e.name.slice(1);
    
});
console.log(r)