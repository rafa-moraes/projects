// make a div
// add a class of wrapper to it
// put into de body
const div = document.createElement('div')
div.classList.add('wrapper')
div.textContent = 'teste'
document.body.insertAdjacentElement("afterbegin", div)

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const ulist = document.createElement('ul')
const list1 = document.createElement('li')
list1.textContent = "one"
const list2 = document.createElement('li')
list2.textContent = "two"
const list3 = document.createElement('li')
list3.textContent = "three"

ulist.insertAdjacentElement('afterbegin', list1)
ulist.appendChild(list2)
ulist.appendChild(list3)

const block = document.querySelector('.wrapper')

block.insertAdjacentElement('beforeend', ulist)

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of cute puppy

const image = document.createElement('img')
image.src = 'https://randomwordgenerator.com/img/picture-generator/54e5d4444c57af14f1dc8460962e33791c3ad6e04e507441722a72dc924ac5_640.jpg'
image.width = '250'
image.classList.add('cute')
image.alt = 'Cute Puppy'

block.insertAdjacentElement('beforeend', image)

// with html string create a div with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph


const divHtml = `
    <div class = 'myDiv'>
        <p> paragraph one</p>
        <p> paragraph two </p>

    </div>

`
block.insertAdjacentHTML('afterbegin', divHtml);
const divisao = div.querySelector('.myDiv'); 
divisao.lastElementChild.classList.add('warning')
divisao.firstElementChild.remove()
console.log(divisao.children[0])

 


// create a function called generatePlayerCard that takes three arguments: name, age and height
// have that function return html that looks like this:
//     <div class="playerCard">
// <h2> Name - Age</h2>
// <p>They are Height and Age of years old. In dog years this person would be Ageindogyears. That would be a tall dog!</p>
//     </div>

function generatePlayerCard (name, age, height) {
    
    return `
    <div class="playerCard">
    <h2> ${name} - ${age}</h2>
    <p>They are ${height} and ${age} of years old. In dog years this person would be ${age * 7}. That would be a tall dog!</p>
    <input class = "del" type="button" value="Delete">   
    </div>
        `

}

// make a new div with a class of cards
const divCards = document.createElement('div')
divCards.classList.add('cards')
// have that function make 4 cards
let cardsHtml = generatePlayerCard('Rafa', 12, 160)
cardsHtml += generatePlayerCard('Lene', 14, 170)
cardsHtml += generatePlayerCard('Pri', 16, 180)
cardsHtml += generatePlayerCard('Rod', 18, 190)

console.log(cardsHtml)

divCards.innerHTML = cardsHtml
div.insertAdjacentElement('beforebegin', divCards)

const delet = divCards.querySelectorAll('input')
console.log(delet)
delet.forEach(inputar => inputar.addEventListener('click',remove));


function remove(){
    console.log(this.parentElement)
    this.parentElement.remove()

}

// append those cards to the div
// put the div into the DOM just before the wrapper element
// put a delete button on each card so when you click it the whole card is removed















