let listaGeral = []

function executeTask() {
    let list = document.createElement("li")
    let tarefa = document.getElementById('toDoTask').value
    let acao = document.createTextNode(tarefa)
    list.appendChild(acao)
    let ulist = document.querySelector('#unorderedList')
    let xbtn = document.createElement('button')
    xbtn.innerHTML = 'X'
    xbtn.classList.add("btnX")
    xbtn.addEventListener('click', removebtn)
    let done = document.createElement('button')
    done.innerHTML = 'Done'
    done.classList.add('donebtn')
    done.addEventListener('click', donebtn)

    listaGeral.push(ulist.appendChild(list)) // comando para adicionar o novo li no array
    list.appendChild(xbtn)
    list.appendChild(done)
    
}


function clearTask(){

    let ulist = document.querySelector('#unorderedList')

    if (ulist) {
        while (ulist.firstChild = true) {
            ulist.removeChild(ulist.firstChild)
            listaGeral.shift()
        }
    }

}

function removebtn () {

    this.parentElement.remove()

}

function donebtn () {

    this.parentElement.style.textDecoration = "line-through"
    

}




























