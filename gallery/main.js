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
        
        
      

        leftArrow.addEventListener('click', direction)
        rightArrow.addEventListener('click', () => direction('next'))
        window.addEventListener('keyup',closeModal)
        // window.addEventListener('click',closeModal)
        
        
        imgModal.src = e.target.src
        modalName.textContent = e.target.name
        modalDescription.textContent = e.target.dataset.description
        modal.style.opacity = '1'
        modal.style.pointerEvents = 'all';
        
        
    
    }
    
    function direction (direction){
        if (direction === 'next'){
            imgModal.src = next.src
            console.log('direita')
        }else {
            console.log('esquerda')
            imgModal.src = prev.src 
        }

    }    


     
    function closeModal (e) {
        if(e.keyCode === 27 || e.currentTarget ==! modal){
        console.log(e.target)
        modal.style.opacity = '0'
        modal.style.pointerEvents = 'none';
    }
    }


    function applyClasses () {



    }











}





// close modal

// move forward and backwards with an arrow

// make sure people can use escape and arrows to move the pictures


























