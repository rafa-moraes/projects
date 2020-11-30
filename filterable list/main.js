
const names = ["James","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","Joshua","Kevin","Brian","George","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob","Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin","Samuel","Frank","Gregory","Raymond","Alexander","Patrick","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Henry","Adam","Douglas","Nathan","Peter","Zachary","Kyle","Walter","Harold","Jeremy","Ethan","Carl","Keith","Roger","Gerald","Christian","Terry","Sean","Arthur","Austin","Noah","Lawrence","Jesse","Joe","Bryan","Billy","Jordan","Albert","Dylan","Bruce","Willie","Gabriel","Alan","Juan","Logan","Wayne","Ralph","Roy","Eugene","Randy","Vincent","Russell","Louis","Philip","Bobby","Johnny","Bradley","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]

names.sort()
let i = 0
names.forEach(createTable)

function createTable () {
        
    const table = document.querySelector('.table')    
    const tableRow = document.createElement('tr')
    const tableData = document.createElement('td')
    const tableHeader = document.createElement('th')
    if(names[i].length<2){
    tableHeader.textContent = names[i]
    tableRow.insertAdjacentElement('beforeend',tableHeader)
    table.insertAdjacentElement('beforeend', tableRow)
    }else {
    tableData.textContent = names[i]
    tableRow.insertAdjacentElement('beforeend',tableData)
    table.insertAdjacentElement('beforeend', tableRow)
    }
    
i++
}



const searchInput = document.querySelector('#searchInput')
searchInput.addEventListener('keyup',searchBar)

function searchBar () {
    const searchWordInput = document.querySelector('#searchInput').value

    const names2 = names.filter(searchWord(searchWordInput))
    console.log(searchWordInput)
    console.log(names2)
  
    }
    

    // function to search the word inputed in the input area
function searchWord (word) {
    return function (searching) {
       return searching.includes(word)
    }
}

// function to delete all the data in the table area
function eraseData () {
    const table = document.querySelector('.table')
    table.innerHTML = ''

}






