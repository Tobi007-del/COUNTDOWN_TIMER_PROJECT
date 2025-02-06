const flipCard = document.querySelector(".flip-card");

const countToDate = new Date("2025-02-14")
let previousTimeBetweenDates
setInterval(() => {
    const currentDate = new Date()
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
    
    if (previousTimeBetweenDates !== timeBetweenDates) {
        flipAllCards(timeBetweenDates)
    }

    previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
    const seconds = time % 60
    const minutes = Math.floor(time / 60) % 60
    const hours = Math.floor(time / 3600) % 24
    const days = Math.floor(time / 86400)
    console.log(days, hours, minutes, seconds)

    // flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
    flip(document.querySelector("[data-days-ones]"), days % 10)
    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
    flip(document.querySelector("[data-hours-ones]"), hours % 10)
    flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
    flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10)) 
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

    const bottomHalf = flipCard.querySelector(".bottom")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement("div")
    bottomFlip.classList.add("bottom-flip")

    topHalf.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber  
    bottomFlip.textContent = newNumber

    topFlip.addEventListener("animationstart", () => {
        topHalf.textContent = newNumber
    })
    topFlip.addEventListener("animationend", () => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", () => {
        bottomHalf.textContent = newNumber
        bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)
}

