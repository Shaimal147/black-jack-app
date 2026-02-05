function game() {
    let firstCard = 17
    let secondCard = 4
    let sum = firstCard + secondCard
    let hadBlackjack = false

    function gameRules() {
        if (sum <= 20) {
            console.log("Do you want to draw a new card")
        } else if (sum === 21) {
            console.log("Whooo! You've got Blackjack!")
            hadBlackjack = true
        } else {
            console.log("You're out of the game!")
        }
    }

    return {
        gameRules   
    }
}



const blackJack = game()

blackJack.gameRules()