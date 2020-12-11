// When you use a function with a capital letter the parameter inside should be an element ou group of elements, so this way you can use one function and execute in more places at the same time
function Slides (slider) {

if(!(slider instanceof Element)){
    throw new Error ('Not an HTML Element')
}

let prev
let current
let next

const slides = slider.querySelector('.slides')
const prevBnt = slider.querySelector('.goToPrev')
const nextBnt = slider.querySelector('.goToNext')

function startSlider () {
    current = slides.querySelector('.current') || slides.querySelector('.slide')
    prev = current.previousElementSibling || slides.lastElementChild
    next = current.nextElementSibling || slides.firstElementChild
 }

function applyClasses () {
    current.classList.add('current')
    prev.classList.add('prev')
    next.classList.add('next')
}

 function moveSlider (direction) {
    const classesToRemove = ['prev', 'current', 'next']
    prev.classList.remove(...classesToRemove)
    current.classList.remove(...classesToRemove)
    next.classList.remove(...classesToRemove)

    if(direction === 'back'){
        [prev, current , next] = [prev.previousElementSibling || slides.lastElementChild , prev, current]


    } else {
        [prev, current , next] = [current , next, next.nextElementSibling || slides.firstElementChild]
    }

    applyClasses()
 }

startSlider()
applyClasses()

prevBnt.addEventListener('click',() => moveSlider('back'))
nextBnt.addEventListener('click',moveSlider)

}

const mySlider1 = Slides(document.querySelector('.slider1'))
const mySlider2 = Slides(document.querySelector('.slider2'))





