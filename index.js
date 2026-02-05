function game() {
    let cards = []
    let card = 0
    let sum = 0
    let specialCards = [11, 12, 13]
    let hasBlackjack = false
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
        resetGame()

        for (let x = 0; x < 2; x++) {
            card = getRandomCard()
            cards.push(card)
        }

        newCardBtn.hidden = false
        startBtn.hidden = true
        render()
    }

    function gameRules() {
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Whooo! You've got Blackjack!"
            hasBlackjack = true
            endRoundUI()
        } else {
            message = "You're out of the game!"
            isAlive = false
            endRoundUI()
        }

        messageEl.textContent = message
    }

    function newCardButton() {
        if (!isAlive || hasBlackjack) return
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
        let randomNumber = Math.floor(Math.random() * 13) + 1
        if (randomNumber === 1) {
            return 11
        } 
        if (specialCards.includes(randomNumber)) {
            return 10
        } else {
            return randomNumber
        }
    }

    function resetGame() {
        cards = []
        sum = 0
        hasBlackjack = false
        isAlive = true
    }

    function endRoundUI() {
        newCardBtn.hidden = true
        startBtn.hidden = false
    }
}



game()