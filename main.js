let userMonthInput = prompt('Please enter in the month of your birth')
let userYearInput = prompt('Please enter in the four digit year of your birth')

let userMonth = parseFloat(userMonthInput)
let userYear = parseFloat(userYearInput)
let now = new Date()
let currentMonth = now.getMonth() + 1
let currentYear = now.getFullYear()

console.log(userMonth)
console.log(userYear)
console.log(currentMonth)
console.log(currentYear)
console.log(now)

let secondsInAMonth = 60 * 60 * 24 * 30
let monthsAlive = (currentYear - userYear - 2) * 12 * secondsInAMonth
let firstYear = (12 - userMonth) * secondsInAMonth
let lastYear = currentMonth * secondsInAMonth
let secondsAlive = monthsAlive + firstYear + lastYear

console.log("secondsInAMonth " + secondsInAMonth)
console.log("monthsAlive " + monthsAlive)
console.log("firstYear " + firstYear)
console.log("lastYear " + lastYear)
console.log("secondsAlive " + secondsAlive)

document.write(`You have been alive for ${secondsAlive.toLocaleString()} seconds!`)

