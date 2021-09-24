let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")


let fcard
let scard
let cards=[]
let sum=0
let hasblackjack=false
let isalive=false
let message = ""

let player= {
    name:"per",
    chips:142
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" + player.chips



function getRandomCard(){
    let randomnum=Math.floor(Math.random()*13)+1
    console.log(randomnum)
    if (randomnum===1) {        
        return 11
    }
    if (randomnum>10) {
        return 10
    }
    else {
        return randomnum
    }

    
}

function startgame(){
    isalive=true
    fcard=getRandomCard()
    scard=getRandomCard()
    cards=[fcard,scard]
    sum=fcard+scard
    console.log(cards)
    rendergame()


}



function rendergame() {
    if (sum<=20){
        message = "Do you want to draw a new card?"
    }else if (sum===21) {
        message="Wohoo! oyu've got Blackjack!"
        hasblackjack=true
    }else {
        message="you're out of game"
        isalive=false
    }
    console.log(message)
    messageEl.textContent=message
    cardsEl.textContent="Cards: "
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+ " "
    }
    
    console.log(sum)
    sumEl.textContent="Sum: "+sum
}


function newcard(){
    if (isalive===true && hasblackjack===false) {
        let card =getRandomCard()
        sum+=card
        cards.push(card)
        rendergame()
    }
    
    
   
}



