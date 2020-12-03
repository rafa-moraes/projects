const paragraph = document.querySelector('p').innerHTML
const charsPage = [...paragraph]
const lettersNumbers = [...new Set(paragraph)]



// charsPage.reduce(countLetters , {})

const filteredLetters = charsPage.filter(reducerLetters)

function reducerLetters(item) {
    if(lettersNumbers.includes(item)){
        
    }


}

function countLetters(acc , item) {
    
    


}






console.log(charsPage)















