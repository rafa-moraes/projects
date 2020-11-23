const image = document.querySelectorAll('img')

image.forEach(e => e.addEventListener('click', flipCards,{capture: false}));

let matches = []

function flipCards (e) {
    
    const id = e.target.id   
    e.target.className = `${id}_show`
    
    matches.push(e.currentTarget.className)  
    
    if(matches.length % 2 === 0){
        checkIfMatch()
        
    }
        
}


function checkIfMatch() {
    // console.log()
    
    if (matches[(matches.length)-1] === matches[(matches.length)-2]) {
        const score = document.querySelector('#score')
        const count = matches.length/2
        score.textContent = `Score: ${count}`
        setTimeout(() => window.alert(`Congratz you have ${count} score`),500)
        
                
    } else {
        // window.alert("Errado")
        const failed = document.querySelector('#failed')
        failed.innerHTML = Number(failed.textContent) + 1
        
        let lastArray = matches[(matches.length-1)]
        
        let esconder = document.querySelector(`.${lastArray}`)
        setTimeout(() => esconder.className = "hide",500)
        matches.pop()
        
        lastArray = matches[(matches.length-1)]
        esconder2 = document.querySelector(`.${lastArray}`)
        setTimeout(() => esconder2.className = "hide",500)
        matches.pop()
        setTimeout(() => window.alert(`Sorry, try again!`),700)
        
    }
    
}



// quero seis cartas viradas pra baixo e ao clicar revelar a foto - OK
// apos revelar 2 cartas ele verificar se as cartas sao iguais - ok
// se forem iguais confirmar e somar um ponto - Somar OK, confirmar tem q arrumar
// se forem diferentes recusar, somar uma tentativa e voltar as cartas ao normal.



// Comando adicionar uma imagem
// const img = document.createElement('img')
//     img.src = "images/cat.jpg"
//     img.classList.add('hide')
//     img.addEventListener('click',flipCards)
//     const cntr = document.querySelector('.images_div')
//     cntr.appendChild(img)



