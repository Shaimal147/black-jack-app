function game() {
    let cards = []
    let card = 0
    let sum = 0
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
        for (let x = 1; x < 3; x++) {
            card = getRandomCard()
            cards.push(card)
        }

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
        card = getRandomCard()
        cards.push(card)
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

    function getRandomCard() {
        return Math.floor(Math.random() * 12) + 1
    }

}



game()