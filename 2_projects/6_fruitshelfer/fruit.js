let fruit=["e","o","o","e","o"] 
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")
console.log("hello")

function sortFruit(){
    for (let i=0 ; i<fruit.length ; i++  ) {
        if (fruit[i]==="e"){
            appleShelf.textContent+=fruit[i]
        }
        if (fruit[i]==="o"){
            orangeShelf.textContent+=fruit[i]
        }
        
    }
    

}


sortFruit()
