const button = document.querySelector('.button')
button.addEventListener('click', counter)
// Access the input element text


// function to count the vowel

function counter () {
    const text = document.querySelector('input').value
    const arrayText = [...text]

    const vowels = ["a", "e", "i" ,"o", "u"]
    const counter = arrayText.reduce((acc,vowel) => {
        if (vowels.includes(vowel)) {
            return acc+1
        } return acc

    },0)

    window.alert(`Esta frase possui ${counter} vogais !`)

    }




















