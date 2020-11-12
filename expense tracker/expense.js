const submit = document.querySelector('#submit')

submit.addEventListener('click',valores)

function valores() {
    const name = document.querySelector('#inputName').value
    const date = document.querySelector('#inputDate').value
    const amount = document.querySelector('#inputAmount').value
    const table = document.querySelector('.tableContainer')

    const newTable = document.createElement('tr')
    const newName = document.createElement('th')
    newName.textContent = name
    newName.classList.add('nameTable')
    
    const newDate = document.createElement('th')
    newDate.textContent = date
    newDate.classList.add('dateTable')
    
    const newAmount = document.createElement('th')
    newAmount.textContent = `$ ${amount}`
    newAmount.classList.add('amountTable')

    const newDel = document.createElement('th')
    const delButton = document.createElement('button')
    delButton.textContent = 'X'
    delButton.addEventListener('click', remove)

    
    table.appendChild(newTable)
    newTable.appendChild(newName)
    newTable.appendChild(newDate)
    newTable.appendChild(newAmount)
    newDel.appendChild(delButton)
    newTable.appendChild(newDel)
  
}

function remove () {
    
    this.parentElement.parentElement.remove()

}





























