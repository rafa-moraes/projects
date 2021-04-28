

let year = window.prompt("Posso andar (S/N) ?")
let age = 2021 - year
let h1 = document.querySelector('h1')

if(year === 'S' || year === 's'){
    h1.textContent = `Voce andou 10 passos`
    
}else {
    h1.textContent = `Voce nao vai andar nada`
    
}










