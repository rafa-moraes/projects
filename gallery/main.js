// Get the items
const gallery = document.querySelectorAll('.gallery img')
gallery.forEach(image => image.addEventListener('click', openModal))

function openModal (e) {
    
    const imgModal = document.querySelector('#img_modal')
    const modalName = document.querySelector('.product_name')
    const modalDescription = document.querySelector('.product_description')
    const leftArrow = document.querySelector('#arrowLeftSpan')
    const rightArrow = document.querySelector('#arrowRightSpan')
    leftArrow.addEventListener('click', prevPicture)
    rightArrow.addEventListener('click', event => console.log(event) )
    imgModal.src = e.currentTarget.src
    modalName.textContent = e.currentTarget.name
    modalDescription.textContent = e.currentTarget.dataset.description
    const modal = document.querySelector('.modal')
    modal.style.opacity = '1'
    modal.style.pointerEvents = 'all';
    console.log(e.target.parentElement.nextElementSibling)

    
    function prevPicture () {
        console.log('left')
    }
    function nextPicture (e) {
  
    }

    function closeModal (e) {
        // if(!modal){
            console.log('functiona')
        // } return
    }



}


// close modal

// move forward and backwards with an arrow

// make sure people can use escape and arrows to move the pictures


























