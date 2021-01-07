const range = document.querySelector('#rangeInput')
let lineCanvas = 30
let isRange = false
range.addEventListener('mousedown', ()=> isRange = true )
range.addEventListener('mouseup', ()=> isRange = false )
range.addEventListener('mousemove', rangeWidth)
function rangeWidth (e) {
    if(!isRange) return
lineCanvas = this.value
}
const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
//make the width and height the size of the screen
canvas.width = window.innerWidth 
canvas.height = window.innerHeight
ctx.strokeStyle = 'yellow'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
// make the color to blend 
// ctx.globalCompositeOperation = 'multiply'
let hue = 0 

let isDrawing = false
let lastX = 0
let lastY = 0

function draw (e) {
if (!isDrawing) {
    return
}
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.lineWidth = lineCanvas
ctx.beginPath()
// start from
ctx.moveTo(lastX, lastY)
// go to
ctx.lineTo(e.offsetX, e.offsetY)
ctx.stroke()
lastX = e.offsetX
lastY = e.offsetY
hue++
if(hue >= 360){
    hue = 0
}
// lineCanvas++
// if(lineCanvas >=80){
//     lineCanvas = 10
// }
}

canvas.addEventListener('mousedown', (e) => {
isDrawing = true
lastX = e.offsetX
lastY = e.offsetY

})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)










