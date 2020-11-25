const score = 100
const prizes = new Map()
// set
prizes.set(100,'Bear')
prizes.set(200,'Duck')
prizes.set(300,'Cat')

// get
console.log(`Your score was ${score} and you win a ${prizes.get(score)}`)

// Size
console.log(prizes.size)

// Add a map with for of
const list = document.querySelector('.uList')

for (const [value, prize] of prizes) {
    const li = `<li>${value} - ${prize}</li>`
    list.insertAdjacentHTML('beforeend',li)
}

// delete
prizes.delete(100)
console.log(prizes)




