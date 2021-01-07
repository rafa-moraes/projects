
const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')
//make the width and height the size of the screen
canvas.width = window.innerWidth 
canvas.height = window.innerHeight
ctx.strokeStyle = 'yellow'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false



