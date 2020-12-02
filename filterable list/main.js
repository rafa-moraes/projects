
let names = ["James","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","Joshua","Kevin","Brian","George","Edward","Ronald","Timothy","Jason","Jeffrey","Ryan","Jacob","Gary","Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin","Samuel","Frank","Gregory","Raymond","Alexander","Patrick","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Henry","Adam","Douglas","Nathan","Peter","Zachary","Kyle","Walter","Harold","Jeremy","Ethan","Carl","Keith","Roger","Gerald","Christian","Terry","Sean","Arthur","Austin","Noah","Lawrence","Jesse","Joe","Bryan","Billy","Jordan","Albert","Dylan","Bruce","Willie","Gabriel","Alan","Juan","Logan","Wayne","Ralph","Roy","Eugene","Randy","Vincent","Russell","Louis","Philip","Bobby","Johnny","Bradley","Helena","Agatha","Alice","Alícia","Antonella","Beatriz","Catarina","Cecília","Clara","Elisa","Eloá","Emanuelly","Esther","Gabriela","Giovanna","Heloísa","Isabella","Isabelly","Isadora","Isis","Júlia","Lara","Laura","Lavínia","Lívia","Liz","Lorena","Luiza","Maitê","Manuela","Mariana","Marina","Melissa","Rafaela","Rebeca","Sarah","Sophia","Valentina","Yasmin","Miguel","Anthony","Antônio","Benício","Bento","Bernardo","Caio","Calebe","Cauã","Davi","Eduardo","Emanuel","Enrico","Enzo","Felipe","Gael","Guilherme","Gustavo","Heitor","Henrique","Isaac","João","Joaquim","Leonardo","Lorenzo","Lucas","Lucca","Matheus","Murilo","Nicolas","Noah","Pedro","Pietro","Rafael","Samuel","Théo","Vicente","Vinícius","Vitor"]
let vowels = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]

let i = 0
names = [...names, ...vowels]
names.sort()
names.forEach(createTable)

// create the table with th or td
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
    tableRow.classList.add('tableData')
    tableRow.insertAdjacentElement('beforeend',tableData)
    table.insertAdjacentElement('beforeend', tableRow)
    }
    
i++
}

const searchInput = document.querySelector('#searchInput')
searchInput.addEventListener('keyup',searchBar)

function searchBar () {
    const searchWordInput = document.querySelector('#searchInput').value.toUpperCase()
    const table = document.querySelector('.table')  
    const tableRow = table.querySelectorAll('.tableData')
    for (let x = 0; x < tableRow.length; x++) {
    if(tableRow[x].innerHTML.toUpperCase().indexOf(searchWordInput)>-1){
        console.log(tableRow[x].innerHTML.toUpperCase().indexOf(searchWordInput))
        tableRow[x].style.display = ''
    }else {
        tableRow[x].style.display = 'none'
    }
    
}
    
    }
   














