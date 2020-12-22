function wait (ms = 0){
    return new Promise (resolve => setTimeout(resolve, ms))
}

function getRandomNumber (min = 20, max = 150) {
    return Math.floor(Math.random()*(max - min) + min)
}
document.querySelectorAll('[data-type]').forEach(draw)

// with for of

// async function draw (e) {
//     const text = e.textContent
//     let newText = ''
//     for (const letter of text) {
//         newText += letter
//         e.textContent = newText
//         const {typeMin, typeMax} = e.dataset
//         const amoutTimeToWait = getRandomNumber(typeMin, typeMax)
//         await wait (amoutTimeToWait)
//     }
// }

// with recursion

async function draw (e) {
    let index = 1
    const text = e.textContent
    const {typeMin, typeMax} = e.dataset
    const amoutTimeToWait = getRandomNumber(typeMin, typeMax)
    async function drawText () {
        await wait (amoutTimeToWait)
        e.textContent = text.slice(0,index)
        index++
        if(index <= text.length)
    drawText()

    }

drawText()


}









