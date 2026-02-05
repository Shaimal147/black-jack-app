function game() {
    let firstCard = 17
    let secondCard = 4
    let sum = firstCard + secondCard
    let hadBlackjack = false
    let isAlive = true
    let message = ""

    const startBtn = document.getElementById("start-btn")

    startBtn.addEventListener("click", startGame)

    function startGame() {
        gameRules()
    }

    function gameRules() {
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
            console.log(message)
        } else if (sum === 21) {
            message = "Whooo! You've got Blackjack!"
            hadBlackjack = true
            console.log(message)
        } else {
            message = "You're out of the game!"
            isAlive = false
            console.log(message)
        }
    }
}



const blackJack = game()