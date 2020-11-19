const add = document.querySelector('.addNote')
add.addEventListener('click', note)
const xbutton = document.querySelector('#xBtn')
xbutton.addEventListener('click',closeModal)
const random = document.querySelector('.randomBtn')
random.addEventListener('click',randomize)

function note () {
// get value from the text area
const txt = document.querySelector('#txtarea').value

// Create a Div element with a class of block
const div = document.createElement('div')
div.classList.add('block')

// Create a p element with a class of p-block
const paragraph = document.createElement('p')
paragraph.classList.add('p-block')
paragraph.textContent = txt

// create a button element with a class of viewMore
const btn = document.createElement('button')
btn.classList.add('viewMore')
btn.textContent = 'View More'
btn.addEventListener('click',openModal)

//Add the paragraph and button to the div element
div.appendChild(paragraph)
div.insertAdjacentElement('beforeend',btn)

//Add the div to the html
const container = document.querySelector('.container')
container.appendChild(div)

// Erase the area wit the note
const txtArea = document.querySelector('#txtarea')
txtArea.textContent = ""
}

// create a function to open the modal with the select text
function openModal(e){
    console.log(e.currentTarget)
const eventText = e.currentTarget.previousElementSibling.textContent
const modalText = document.querySelector('.p-modal')
modalText.textContent = ""
modalText.textContent = eventText
const modal = document.querySelector('.modal')
modal.style.display = "block"
document.body.style.background = 'rgba(128, 128, 128, 0.5)'
e.stopPropagation()
window.addEventListener('click',closeIf)
}

function closeModal(e) {
    const modal = document.querySelector('.modal')
    modal.style.display = "none"
    document.body.style.background = ''
    
    
}

//Create a function to close the modal

function closeIf(e){
    
    const modal = document.querySelector('.modal')
    const pModal = document.querySelector('.p-modal')
    if (e.target !== modal && e.target !== pModal) {
    modal.style.display = "none" 
    document.body.style.background = ''  
       
    }

    
}

function randomize() {
    const txt = document.querySelector('#txtarea')
    txt.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda reprehenderit fuga odit inventore iure ducimus. Quibusdam vel est dolorum quae culpa, quod assumenda veritatis illo commodi possimus necessitatibus natus nihil, tempora earum eveniet sunt recusandae? Nulla saepe molestiae, hic distinctio reiciendis magni provident assumenda fuga voluptatibus! Corrupti non quae est aperiam similique necessitatibus eaque, aut consequatur debitis nulla! Enim assumenda rerum voluptate optio at explicabo recusandae repellat saepe quod debitis corrupti ratione soluta nisi magnam eaque, tenetur officiis consequuntur eligendi animi rem magni architecto? Dolore eaque facere iure voluptatum nesciunt molestias! Perspiciatis porro dolorum consequatur. Excepturi maiores facere impedit placeat minus vitae alias fugit, corrupti consequuntur ipsum, molestias suscipit? Illo facilis possimus cum! Laudantium distinctio expedita voluptate architecto ipsam magni deserunt nobis asperiores debitis eius dolore, delectus facilis ratione commodi aspernatur maiores, ipsa dicta libero vero nulla alias! Repellat autem magni ducimus? Doloribus porro temporibus velit illum magnam natus harum, eos quasi soluta nam obcaecati libero molestiae amet. Numquam ratione harum sed perspiciatis quaerat sint magni iure quibusdam asperiores unde praesentium, enim animi aliquam ipsam quas nemo alias labore et natus distinctio vero expedita minima? Accusantium velit, delectus minima dicta necessitatibus deleniti soluta corporis atque aut aliquid illo eaque est itaque perspiciatis earum possimus rem, labore blanditiis facere beatae eos modi? Quod molestiae sequi distinctio eveniet atque id corrupti repellat? Iure perferendis esse ducimus doloremque excepturi eaque ex hic, odit veritatis exercitationem saepe neque molestiae itaque. Laborum magnam ex autem ea quod placeat, numquam quae at, blanditiis voluptas consequatur amet aut veniam. Natus alias earum fuga deserunt aperiam soluta, ipsa, voluptas repellendus laboriosam exercitationem dolorem nisi inventore, quaerat velit officia fugiat ullam blanditiis sapiente aliquam sunt? Quam architecto odio ab veniam, perferendis iure repellendus mollitia optio eos labore vitae quod ullam voluptate voluptatem facilis fugit. Unde natus alias in?"

}








