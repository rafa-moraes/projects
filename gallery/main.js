// Get the items
const gallery = Gallery(document.querySelector('.gallery'))


function Gallery (pictures) {
    const images = pictures.querySelectorAll('.images')
    const modal = pictures.querySelector('.modal')
    images.forEach(image => image.addEventListener('click', openModal))
    let current
    let prev
    let next
    const imgModal = pictures.querySelector('#img_modal')
    const modalName = pictures.querySelector('.product_name')
    const modalDescription = pictures.querySelector('.product_description')
    const leftArrow = pictures.querySelector('#arrowLeftSpan')
    const rightArrow = pictures.querySelector('#arrowRightSpan')

    function openModal (e) {
        current = e.target.parentElement
        prev = current.previousElementSibling || images[0].lastElementChild
        next = current.nextElementSibling || images[0].firstElementChild

        console.dir(images[0].lastElementChild)
        e.stopPropagation()
        leftArrow.addEventListener('click', direction)
        rightArrow.addEventListener('click', () => direction('next'))
        window.addEventListener('keyup',handleModal)
        window.addEventListener('click',handleModal)
        
        imgModal.src = e.target.src
        modalName.textContent = e.target.name
        modalDescription.textContent = e.target.dataset.description
        modal.style.opacity = '1'
        modal.style.pointerEvents = 'all';
        
        
        
    }
    
    function direction (direction){
        if (direction === 'next'){
            console.log('teste')
            imgModal.src = next.childNodes[1].currentSrc
            modalName.textContent = next.childNodes[1].attributes[4].textContent
            modalDescription.textContent = next.childNodes[1].attributes[5].textContent
            prev = current
            current = next
            next = next.nextElementSibling || images[0].firstElementChild
            
        }else {
            console.log('esquerda')
            imgModal.src = prev.childNodes[1].currentSrc
            modalName.textContent = prev.childNodes[1].attributes[4].textContent
            modalDescription.textContent = prev.childNodes[1].attributes[5].textContent
            next = current
            current = prev
            prev = prev.previousElementSibling || images[0].lastElementChild
            
        }

    }    


     
    function handleModal (e) {
        if(e.keyCode === 27){
            modal.style.opacity = '0'
            modal.style.pointerEvents = 'none';
        }if(e.keyCode === 39){
            return direction('next')
        }if(e.keyCode === 37){
            return direction()
        }
            
       
    }
    }










// close modal

// move forward and backwards with an arrow

// make sure people can use escape and arrows to move the pictures


























