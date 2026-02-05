function game() {
    let cards = [2, 3]
    let sum = calculateSum()
    let hadBlackjack = false
    let isAlive = true
    let message = ""

    const startBtn = document.getElementById("start-btn")
    const messageEl = document.getElementById("message-el")
    const sumEl = document.getElementById("sum-el")
    const cardsEl = document.getElementById("cards-el")
    const newCardBtn = document.getElementById("new-card-btn")

    startBtn.addEventListener("click", startGame)
    newCardBtn.addEventListener("click", newCardButton)

    function startGame() {
        newCardBtn.hidden = false
        render()
    }

    function gameRules() {
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Whooo! You've got Blackjack!"
            hadBlackjack = true
            newCardBtn.hidden = true
        } else {
            message = "You're out of the game!"
            isAlive = false
            newCardBtn.hidden = true
        }

        messageEl.textContent = message
    }

    function newCardButton() {
        if (!isAlive || hadBlackjack) return
        cards.push(1)
        render()
    }

    function calculateSum() {
        return cards.reduce((total, current) => total + current, 0)
    }

    function render() {
        sum = calculateSum()
        cardsEl.textContent = `Cards: ${cards.join(" - ")}`
        sumEl.textContent = `Sum: ${sum}`
        gameRules()
    }

}



game()