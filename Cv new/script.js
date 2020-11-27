const btn_project = document.querySelector('.read-projects')
const btn_irl = document.querySelector('.read-Irl')
const btn_br = document.querySelector('.read-Br')
const btnX = document.querySelector('#xBtn')

btn_project.addEventListener('click', openModal)
btn_irl.addEventListener('click', openModal)
btn_br.addEventListener('click', openModal)

btnX.addEventListener('click', closeModal)

function openModal(e) {
    const dModal = document.querySelector('.divModal')
    const modal = document.querySelector('.modal')
    if(this.className === 'read-projects'){
       dModal.innerHTML = `       `     
    }
    
    modal.style.display = "block"


    document.body.style.background = 'white'
    // body.style.background = '#1E5155'
    
    e.stopPropagation()
    window.addEventListener('click',closeIf)

}



function closeModal() {
    const modal = document.querySelector('.modal')
    modal.style.display = "none"
    document.body.style.background = ''  
}


function closeIf (e) {
    console.log(e.target)
    const modal = document.querySelector('.modal')
    const dModal = document.querySelector('.divModal')
    if (e.target !== modal && e.target !== dModal) {
        modal.style.display = "none" 
        document.body.style.background = ''  
    }
}









