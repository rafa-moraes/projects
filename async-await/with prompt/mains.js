function wait (ms = 0) {
    return new Promise (resolve => setTimeout(resolve, ms))
}

async function destroyPopup (popup) {
    popup.classList.remove('open')
    await wait(1000)
    popup.remove()

}
function ask (options) {
    return new Promise (async function (resolve) {
        // first create a popup with all the fields in it
        const popup = document.createElement('form')
        popup.classList.add ('popup')
        
    popup.insertAdjacentHTML('afterbegin',
    `<fieldset>
    <label> ${options.title} </label>
    <input type="text" name="input">
    <div class='fieldButtons'>
    <button type="submit">Submit</button>
    </div>
    </fieldset>
    `)
    
    // check if they want a cancel button
    const divButtons = popup.firstElementChild.lastElementChild
    if (options.cancel){
        const skipButton = document.createElement('button')
        skipButton.type = 'button'
        skipButton.textContent = 'Cancel'
        divButtons.appendChild(skipButton)
    // Listen for a click on that cancel button
        skipButton.addEventListener('click', function () {
            resolve(null)
            destroyPopup(popup)
        }, 
            {once:true}
        )
            
    }
    // to remove an event listener after run, you can use the 3 argument with once
    popup.addEventListener('submit',function (e) {
        e.preventDefault()
        console.log('submitted')
        resolve(e.target.input.value)
        destroyPopup(popup)
    }, {once: true} )
        //  listen for the submit event on the inputs

        //  when someone does submit it, resolve the data that was in the input box!

        // insert that popup into de DOM
    document.body.appendChild(popup)
    await wait(50)
    popup.classList.add('open')
    })

}

// select all buttons that have a question
const qButtons = document.querySelectorAll('[data-question]')
qButtons.forEach(button => button.addEventListener('click', askQuestion ))

async function askQuestion (e) {
    const button = e.currentTarget
    const cancel = 'cancel' in button.dataset
    const answer = await ask ({
        title: button.dataset.question, 
        cancel
    })
    console.log(answer)


}


        










        // Example to run many questions when start in the right order  

const questions = [
    {title: 'What is your name ?'},
    {title: 'What is your age ?', cancel: true},
    {title: 'What is your dogs name ?', cancel: true},
]

async function askMany () {
    for(const question of questions){
        const answer = await ask(question)
        console.log(answer)
    }
}
askMany()












