let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let fcard=10
let scard=6
let sum=fcard+scard
let hasblackjack=false
let isalive=true
let message = ""






function startgame() {
    if (sum<=20){
        message = "Do you want to draw a new card?"
    }else if (sum===21) {
        message="Wohoo! oyu've got Blackjack!"
    }else {
        message="you're out of game"
        isalive=false
    }
    console.log(message)
    messageEl.textContent=message
    cardsEl.textContent=fcard+" "+scard
    sumEl.textContent="Sum:"+sum
    
}