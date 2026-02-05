function game() {
    let cards = [11, 10]
    let sum = cards.reduce((total, current) => {
        return  total + current
    }, 0)
    let hadBlackjack = false
    let isAlive = true
    let message = ""

    const startBtn = document.getElementById("start-btn")
    const messageEl = document.getElementById("message-el")
    const sumEl = document.getElementById("sum-el")
    const cardsEl = document.getElementById("cards-el")

    startBtn.addEventListener("click", startGame)

    function startGame() {
        cardsEl.textContent = `Cards: ${cards.join(" - ")}`
        gameRules()
        sumEl.textContent = `Sum: ${sum}`
    }

    function gameRules() {
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
            messageEl.textContent = message
        } else if (sum === 21) {
            message = "Whooo! You've got Blackjack!"
            hadBlackjack = true
            messageEl.textContent = message
        } else {
            message = "You're out of the game!"
            isAlive = false
            messageEl.textContent = message
        }
    }
}



const blackJack = game()