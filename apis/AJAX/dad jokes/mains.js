const buttonJokes = [
    'OMG',
    'Terrible',
    'Ugh',
    'Click again',
    'Please stop',
    'Oh, really?',
    'Seriously?',
    'Just Stop'
]
const pJoke = document.querySelector('.joke')
const btnJoke = document.querySelector('.jokeButton')
btnJoke.addEventListener('click', fetchJokes)

async function fetchJokes () {
    const endPoint = 'https://icanhazdadjoke.com/'
    const response = await fetch(`${endPoint}`, {
        headers: {
            Accept: 'application/json'
        }

    })
    const data = await response.json()
    pJoke.textContent = data.joke
    btnJoke.textContent = buttonJokes[Math.floor(Math.random()*buttonJokes.length)]

}
