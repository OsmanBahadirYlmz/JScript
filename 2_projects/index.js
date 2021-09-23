console.log("index js");
document.write("index");
let name="oby ";
console.log(name);
// ---object oriented

// let person ={
//     name: "mash",
//     age: 30

// };
// person["name"]="marr";
// console.log(person);
// ----same as above but more useful
let person ={
    name: "mash",
    age: 30

};
let selection = "name";
person[selection]="marr";
console.log(person);

// arrays 

let selectedcolors=["red","blue" ,"black"];
selectedcolors[3]=3 //dynamic array
console.log(selectedcolors)
console.log(selectedcolors.length) 

//functions

function greet(name,lastname){
    console.log("hello  "+ name+" " + lastname)
}
 greet("bahadir", "yilmaz");
 greet("yilmaz");

function square(number){
    return number*number
}

console.log(square(2))


