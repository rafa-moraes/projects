const image = document.querySelectorAll('img')

image.forEach(e => e.addEventListener('click', flipCards));

let matches = []



function flipCards (e) {
    
    console.log(e.currentTarget)   
    e.currentTarget.className = 'show'
    let push = matches.push(e.target.src)  
    if(matches.length % 2 === 0){
        checkIfMatch()
    }
        
}

function checkArray (e) {
    


}





function checkIfMatch(e) {
    // console.log()
    
    if (matches[(matches.length)-1] === matches[(matches.length)-2]) {
        const score = document.querySelector('#score')
        const count = matches.length/2
        score.textContent = `Score: ${count}`
        
}
    
}  

// function checkIfMatchTwo () {
//     if (matches[2] === matches[3]) {
//         const score = document.querySelector('#score')
//         const count = matches.length/2
//         score.textContent = `Score: ${count}`
//         window.alert('Correto')
// }
// }

// function checkIfMatchThree () {
//     if (matches[4] === matches[5]) {
//         const score = document.querySelector('#score')
//         const count = matches.length/2
//         score.textContent = `Score: ${count}`
//         window.alert('Correto')
// }
// }





// quero seis cartas viradas pra baixo e ao clicar revelar a foto
// apos revelar 2 cartas ele verificar se as cartas sao iguais
// se forem iguais confirmar e somar um ponto
// se forem diferentes recusar, somar uma tentativa e voltar as cartas ao normal.



// Comando adicionar uma imagem
// const img = document.createElement('img')
//     img.src = "images/cat.jpg"
//     img.classList.add('hide')
//     img.addEventListener('click',flipCards)
//     const cntr = document.querySelector('.images_div')
//     cntr.appendChild(img)








