let inputBtn= document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
    console.log("button cliced")
})

let person= {
    name:"osman",
    age:33,
    country:"TR",

}


function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()
console.log("ab")

function saveLead(){
    console.log("save basıldı")
}



